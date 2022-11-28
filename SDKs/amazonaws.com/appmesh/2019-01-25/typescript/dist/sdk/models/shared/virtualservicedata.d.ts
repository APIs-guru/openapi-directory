import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualServiceSpec } from "./virtualservicespec";
import { VirtualServiceStatus } from "./virtualservicestatus";
/**
 * An object that represents a virtual service returned by a describe operation.
**/
export declare class VirtualServiceData extends SpeakeasyBase {
    meshName: string;
    metadata: ResourceMetadata;
    spec: VirtualServiceSpec;
    status: VirtualServiceStatus;
    virtualServiceName: string;
}
