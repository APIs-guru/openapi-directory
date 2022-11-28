import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { MeshSpec } from "./meshspec";
import { MeshStatus } from "./meshstatus";



// MeshData
/** 
 * An object that represents a service mesh returned by a describe operation.
**/
export class MeshData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: MeshSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: MeshStatus;
}
