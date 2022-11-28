import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePullRequestDescriptionXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestDescription = "CodeCommit_20150413.UpdatePullRequestDescription"
}
export declare class UpdatePullRequestDescriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePullRequestDescriptionXAmzTargetEnum;
}
export declare class UpdatePullRequestDescriptionRequest extends SpeakeasyBase {
    headers: UpdatePullRequestDescriptionHeaders;
    request: shared.UpdatePullRequestDescriptionInput;
}
export declare class UpdatePullRequestDescriptionResponse extends SpeakeasyBase {
    contentType: string;
    invalidDescriptionException?: any;
    invalidPullRequestIdException?: any;
    pullRequestAlreadyClosedException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    statusCode: number;
    updatePullRequestDescriptionOutput?: shared.UpdatePullRequestDescriptionOutput;
}
