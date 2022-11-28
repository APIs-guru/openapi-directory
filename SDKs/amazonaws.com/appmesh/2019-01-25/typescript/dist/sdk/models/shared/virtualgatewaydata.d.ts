import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualGatewaySpec } from "./virtualgatewayspec";
import { VirtualGatewayStatus } from "./virtualgatewaystatus";
/**
 * An object that represents a virtual gateway returned by a describe operation.
**/
export declare class VirtualGatewayData extends SpeakeasyBase {
    meshName: string;
    metadata: ResourceMetadata;
    spec: VirtualGatewaySpec;
    status: VirtualGatewayStatus;
    virtualGatewayName: string;
}
