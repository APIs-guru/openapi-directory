import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { MeshSpec } from "./meshspec";
import { MeshStatus } from "./meshstatus";
/**
 * An object that represents a service mesh returned by a describe operation.
**/
export declare class MeshData extends SpeakeasyBase {
    meshName: string;
    metadata: ResourceMetadata;
    spec: MeshSpec;
    status: MeshStatus;
}
