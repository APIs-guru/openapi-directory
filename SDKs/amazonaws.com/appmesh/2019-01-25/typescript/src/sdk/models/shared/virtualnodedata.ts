import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualNodeSpec } from "./virtualnodespec";
import { VirtualNodeStatus } from "./virtualnodestatus";


// VirtualNodeData
/** 
 * An object that represents a virtual node returned by a describe operation.
**/
export class VirtualNodeData extends SpeakeasyBase {
  @Metadata({ data: "json, name=meshName" })
  meshName: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @Metadata({ data: "json, name=spec" })
  spec: VirtualNodeSpec;

  @Metadata({ data: "json, name=status" })
  status: VirtualNodeStatus;

  @Metadata({ data: "json, name=virtualNodeName" })
  virtualNodeName: string;
}
