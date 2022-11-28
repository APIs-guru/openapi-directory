import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPullRequestOverrideStateXAmzTargetEnum {
    CodeCommit20150413GetPullRequestOverrideState = "CodeCommit_20150413.GetPullRequestOverrideState"
}
export declare class GetPullRequestOverrideStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPullRequestOverrideStateXAmzTargetEnum;
}
export declare class GetPullRequestOverrideStateRequest extends SpeakeasyBase {
    headers: GetPullRequestOverrideStateHeaders;
    request: shared.GetPullRequestOverrideStateInput;
}
export declare class GetPullRequestOverrideStateResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getPullRequestOverrideStateOutput?: shared.GetPullRequestOverrideStateOutput;
    invalidPullRequestIdException?: any;
    invalidRevisionIdException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    revisionIdRequiredException?: any;
    statusCode: number;
}
