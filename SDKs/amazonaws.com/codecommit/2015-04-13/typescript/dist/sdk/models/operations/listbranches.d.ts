import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBranchesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListBranchesXAmzTargetEnum {
    CodeCommit20150413ListBranches = "CodeCommit_20150413.ListBranches"
}
export declare class ListBranchesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBranchesXAmzTargetEnum;
}
export declare class ListBranchesRequest extends SpeakeasyBase {
    queryParams: ListBranchesQueryParams;
    headers: ListBranchesHeaders;
    request: shared.ListBranchesInput;
}
export declare class ListBranchesResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidContinuationTokenException?: any;
    invalidRepositoryNameException?: any;
    listBranchesOutput?: shared.ListBranchesOutput;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
