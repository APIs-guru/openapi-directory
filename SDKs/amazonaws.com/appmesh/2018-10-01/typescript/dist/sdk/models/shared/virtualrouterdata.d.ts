import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualRouterSpec } from "./virtualrouterspec";
import { VirtualRouterStatus } from "./virtualrouterstatus";
/**
 * An object representing a virtual router returned by a describe operation.
**/
export declare class VirtualRouterData extends SpeakeasyBase {
    meshName: string;
    metadata?: ResourceMetadata;
    spec?: VirtualRouterSpec;
    status?: VirtualRouterStatus;
    virtualRouterName: string;
}
