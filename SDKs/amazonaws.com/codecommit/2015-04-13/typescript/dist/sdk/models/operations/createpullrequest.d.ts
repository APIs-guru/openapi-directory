import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePullRequestXAmzTargetEnum {
    CodeCommit20150413CreatePullRequest = "CodeCommit_20150413.CreatePullRequest"
}
export declare class CreatePullRequestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePullRequestXAmzTargetEnum;
}
export declare class CreatePullRequestRequest extends SpeakeasyBase {
    headers: CreatePullRequestHeaders;
    request: shared.CreatePullRequestInput;
}
export declare class CreatePullRequestResponse extends SpeakeasyBase {
    clientRequestTokenRequiredException?: any;
    contentType: string;
    createPullRequestOutput?: shared.CreatePullRequestOutput;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    idempotencyParameterMismatchException?: any;
    invalidClientRequestTokenException?: any;
    invalidDescriptionException?: any;
    invalidReferenceNameException?: any;
    invalidRepositoryNameException?: any;
    invalidTargetException?: any;
    invalidTargetsException?: any;
    invalidTitleException?: any;
    maximumOpenPullRequestsExceededException?: any;
    multipleRepositoriesInPullRequestException?: any;
    referenceDoesNotExistException?: any;
    referenceNameRequiredException?: any;
    referenceTypeNotSupportedException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    sourceAndDestinationAreSameException?: any;
    statusCode: number;
    targetRequiredException?: any;
    targetsRequiredException?: any;
    titleRequiredException?: any;
}
