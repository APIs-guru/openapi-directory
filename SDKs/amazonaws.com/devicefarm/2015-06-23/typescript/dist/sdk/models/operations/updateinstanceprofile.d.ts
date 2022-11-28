import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateInstanceProfileXAmzTargetEnum {
    DeviceFarm20150623UpdateInstanceProfile = "DeviceFarm_20150623.UpdateInstanceProfile"
}
export declare class UpdateInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInstanceProfileXAmzTargetEnum;
}
export declare class UpdateInstanceProfileRequest extends SpeakeasyBase {
    headers: UpdateInstanceProfileHeaders;
    request: shared.UpdateInstanceProfileRequest;
}
export declare class UpdateInstanceProfileResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    updateInstanceProfileResult?: shared.UpdateInstanceProfileResult;
}
