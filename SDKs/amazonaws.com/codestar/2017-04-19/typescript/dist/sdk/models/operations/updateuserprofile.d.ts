import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateUserProfileXAmzTargetEnum {
    CodeStar20170419UpdateUserProfile = "CodeStar_20170419.UpdateUserProfile"
}
export declare class UpdateUserProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserProfileXAmzTargetEnum;
}
export declare class UpdateUserProfileRequest extends SpeakeasyBase {
    headers: UpdateUserProfileHeaders;
    request: shared.UpdateUserProfileRequest;
}
export declare class UpdateUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateUserProfileResult?: shared.UpdateUserProfileResult;
    userProfileNotFoundException?: any;
    validationException?: any;
}
