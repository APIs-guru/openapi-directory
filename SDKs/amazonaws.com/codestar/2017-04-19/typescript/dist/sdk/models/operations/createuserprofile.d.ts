import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateUserProfileXAmzTargetEnum {
    CodeStar20170419CreateUserProfile = "CodeStar_20170419.CreateUserProfile"
}
export declare class CreateUserProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserProfileXAmzTargetEnum;
}
export declare class CreateUserProfileRequest extends SpeakeasyBase {
    headers: CreateUserProfileHeaders;
    request: shared.CreateUserProfileRequest;
}
export declare class CreateUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    createUserProfileResult?: shared.CreateUserProfileResult;
    statusCode: number;
    userProfileAlreadyExistsException?: any;
    validationException?: any;
}
