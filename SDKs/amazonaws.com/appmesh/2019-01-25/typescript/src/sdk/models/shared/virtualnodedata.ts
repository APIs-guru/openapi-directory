import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualNodeSpec } from "./virtualnodespec";
import { VirtualNodeStatus } from "./virtualnodestatus";



// VirtualNodeData
/** 
 * An object that represents a virtual node returned by a describe operation.
**/
export class VirtualNodeData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: VirtualNodeSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: VirtualNodeStatus;

  @SpeakeasyMetadata({ data: "json, name=virtualNodeName" })
  virtualNodeName: string;
}
