import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateNetworkProfileXAmzTargetEnum {
    DeviceFarm20150623UpdateNetworkProfile = "DeviceFarm_20150623.UpdateNetworkProfile"
}
export declare class UpdateNetworkProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNetworkProfileXAmzTargetEnum;
}
export declare class UpdateNetworkProfileRequest extends SpeakeasyBase {
    headers: UpdateNetworkProfileHeaders;
    request: shared.UpdateNetworkProfileRequest;
}
export declare class UpdateNetworkProfileResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    updateNetworkProfileResult?: shared.UpdateNetworkProfileResult;
}
