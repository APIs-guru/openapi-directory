import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AllowCustomRoutingTrafficXAmzTargetEnum {
    GlobalAcceleratorV20180706AllowCustomRoutingTraffic = "GlobalAccelerator_V20180706.AllowCustomRoutingTraffic"
}
export declare class AllowCustomRoutingTrafficHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllowCustomRoutingTrafficXAmzTargetEnum;
}
export declare class AllowCustomRoutingTrafficRequest extends SpeakeasyBase {
    headers: AllowCustomRoutingTrafficHeaders;
    request: shared.AllowCustomRoutingTrafficRequest;
}
export declare class AllowCustomRoutingTrafficResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
