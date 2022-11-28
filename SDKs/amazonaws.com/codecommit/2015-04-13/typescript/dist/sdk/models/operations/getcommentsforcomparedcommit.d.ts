import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommentsForComparedCommitQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetCommentsForComparedCommitXAmzTargetEnum {
    CodeCommit20150413GetCommentsForComparedCommit = "CodeCommit_20150413.GetCommentsForComparedCommit"
}
export declare class GetCommentsForComparedCommitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommentsForComparedCommitXAmzTargetEnum;
}
export declare class GetCommentsForComparedCommitRequest extends SpeakeasyBase {
    queryParams: GetCommentsForComparedCommitQueryParams;
    headers: GetCommentsForComparedCommitHeaders;
    request: shared.GetCommentsForComparedCommitInput;
}
export declare class GetCommentsForComparedCommitResponse extends SpeakeasyBase {
    commitDoesNotExistException?: any;
    commitIdRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getCommentsForComparedCommitOutput?: shared.GetCommentsForComparedCommitOutput;
    invalidCommitIdException?: any;
    invalidContinuationTokenException?: any;
    invalidMaxResultsException?: any;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
