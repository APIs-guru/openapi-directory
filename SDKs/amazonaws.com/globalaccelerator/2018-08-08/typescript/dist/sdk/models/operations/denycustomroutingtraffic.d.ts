import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DenyCustomRoutingTrafficXAmzTargetEnum {
    GlobalAcceleratorV20180706DenyCustomRoutingTraffic = "GlobalAccelerator_V20180706.DenyCustomRoutingTraffic"
}
export declare class DenyCustomRoutingTrafficHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DenyCustomRoutingTrafficXAmzTargetEnum;
}
export declare class DenyCustomRoutingTrafficRequest extends SpeakeasyBase {
    headers: DenyCustomRoutingTrafficHeaders;
    request: shared.DenyCustomRoutingTrafficRequest;
}
export declare class DenyCustomRoutingTrafficResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
