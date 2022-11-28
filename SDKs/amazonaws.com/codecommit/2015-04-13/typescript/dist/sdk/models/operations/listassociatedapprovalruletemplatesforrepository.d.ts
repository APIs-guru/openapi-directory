import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum {
    CodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepository = "CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository"
}
export declare class ListAssociatedApprovalRuleTemplatesForRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum;
}
export declare class ListAssociatedApprovalRuleTemplatesForRepositoryRequest extends SpeakeasyBase {
    queryParams: ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams;
    headers: ListAssociatedApprovalRuleTemplatesForRepositoryHeaders;
    request: shared.ListAssociatedApprovalRuleTemplatesForRepositoryInput;
}
export declare class ListAssociatedApprovalRuleTemplatesForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidContinuationTokenException?: any;
    invalidMaxResultsException?: any;
    invalidRepositoryNameException?: any;
    listAssociatedApprovalRuleTemplatesForRepositoryOutput?: shared.ListAssociatedApprovalRuleTemplatesForRepositoryOutput;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
