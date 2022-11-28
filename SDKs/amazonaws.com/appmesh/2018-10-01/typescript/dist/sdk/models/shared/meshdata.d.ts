import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { MeshStatus } from "./meshstatus";
/**
 * An object representing a service mesh returned by a describe operation.
**/
export declare class MeshData extends SpeakeasyBase {
    meshName: string;
    metadata: ResourceMetadata;
    status?: MeshStatus;
}
