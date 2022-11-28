import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDifferencesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetDifferencesXAmzTargetEnum {
    CodeCommit20150413GetDifferences = "CodeCommit_20150413.GetDifferences"
}
export declare class GetDifferencesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDifferencesXAmzTargetEnum;
}
export declare class GetDifferencesRequest extends SpeakeasyBase {
    queryParams: GetDifferencesQueryParams;
    headers: GetDifferencesHeaders;
    request: shared.GetDifferencesInput;
}
export declare class GetDifferencesResponse extends SpeakeasyBase {
    commitDoesNotExistException?: any;
    commitRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getDifferencesOutput?: shared.GetDifferencesOutput;
    invalidCommitException?: any;
    invalidCommitIdException?: any;
    invalidContinuationTokenException?: any;
    invalidMaxResultsException?: any;
    invalidPathException?: any;
    invalidRepositoryNameException?: any;
    pathDoesNotExistException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
