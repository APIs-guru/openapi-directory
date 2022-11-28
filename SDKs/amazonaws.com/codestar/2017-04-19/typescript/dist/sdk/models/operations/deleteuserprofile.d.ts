import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteUserProfileXAmzTargetEnum {
    CodeStar20170419DeleteUserProfile = "CodeStar_20170419.DeleteUserProfile"
}
export declare class DeleteUserProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserProfileXAmzTargetEnum;
}
export declare class DeleteUserProfileRequest extends SpeakeasyBase {
    headers: DeleteUserProfileHeaders;
    request: shared.DeleteUserProfileRequest;
}
export declare class DeleteUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    deleteUserProfileResult?: shared.DeleteUserProfileResult;
    statusCode: number;
    validationException?: any;
}
