import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInstanceProfileXAmzTargetEnum {
    DeviceFarm20150623GetInstanceProfile = "DeviceFarm_20150623.GetInstanceProfile"
}
export declare class GetInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceProfileXAmzTargetEnum;
}
export declare class GetInstanceProfileRequest extends SpeakeasyBase {
    headers: GetInstanceProfileHeaders;
    request: shared.GetInstanceProfileRequest;
}
export declare class GetInstanceProfileResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getInstanceProfileResult?: shared.GetInstanceProfileResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
