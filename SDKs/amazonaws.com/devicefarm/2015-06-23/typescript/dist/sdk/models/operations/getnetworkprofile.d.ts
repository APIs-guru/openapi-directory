import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetNetworkProfileXAmzTargetEnum {
    DeviceFarm20150623GetNetworkProfile = "DeviceFarm_20150623.GetNetworkProfile"
}
export declare class GetNetworkProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNetworkProfileXAmzTargetEnum;
}
export declare class GetNetworkProfileRequest extends SpeakeasyBase {
    headers: GetNetworkProfileHeaders;
    request: shared.GetNetworkProfileRequest;
}
export declare class GetNetworkProfileResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getNetworkProfileResult?: shared.GetNetworkProfileResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
