import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateInstanceProfileXAmzTargetEnum {
    DeviceFarm20150623CreateInstanceProfile = "DeviceFarm_20150623.CreateInstanceProfile"
}
export declare class CreateInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInstanceProfileXAmzTargetEnum;
}
export declare class CreateInstanceProfileRequest extends SpeakeasyBase {
    headers: CreateInstanceProfileHeaders;
    request: shared.CreateInstanceProfileRequest;
}
export declare class CreateInstanceProfileResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    createInstanceProfileResult?: shared.CreateInstanceProfileResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
