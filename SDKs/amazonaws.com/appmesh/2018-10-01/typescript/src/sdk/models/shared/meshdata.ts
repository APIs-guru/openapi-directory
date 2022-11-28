import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { MeshStatus } from "./meshstatus";



// MeshData
/** 
 * An object representing a service mesh returned by a describe operation.
**/
export class MeshData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MeshStatus;
}
