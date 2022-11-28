import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePullRequestTitleXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestTitle = "CodeCommit_20150413.UpdatePullRequestTitle"
}
export declare class UpdatePullRequestTitleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePullRequestTitleXAmzTargetEnum;
}
export declare class UpdatePullRequestTitleRequest extends SpeakeasyBase {
    headers: UpdatePullRequestTitleHeaders;
    request: shared.UpdatePullRequestTitleInput;
}
export declare class UpdatePullRequestTitleResponse extends SpeakeasyBase {
    contentType: string;
    invalidPullRequestIdException?: any;
    invalidTitleException?: any;
    pullRequestAlreadyClosedException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    statusCode: number;
    titleRequiredException?: any;
    updatePullRequestTitleOutput?: shared.UpdatePullRequestTitleOutput;
}
