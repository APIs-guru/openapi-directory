import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualNodeSpec } from "./virtualnodespec";
import { VirtualNodeStatus } from "./virtualnodestatus";
/**
 * An object that represents a virtual node returned by a describe operation.
**/
export declare class VirtualNodeData extends SpeakeasyBase {
    meshName: string;
    metadata: ResourceMetadata;
    spec: VirtualNodeSpec;
    status: VirtualNodeStatus;
    virtualNodeName: string;
}
