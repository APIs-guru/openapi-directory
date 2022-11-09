import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { MeshStatus } from "./meshstatus";


// MeshData
/** 
 * An object representing a service mesh returned by a describe operation.
**/
export class MeshData extends SpeakeasyBase {
  @Metadata({ data: "json, name=meshName" })
  meshName: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @Metadata({ data: "json, name=status" })
  status?: MeshStatus;
}
