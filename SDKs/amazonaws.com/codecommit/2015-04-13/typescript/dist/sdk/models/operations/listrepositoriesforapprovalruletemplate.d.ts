import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRepositoriesForApprovalRuleTemplateQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413ListRepositoriesForApprovalRuleTemplate = "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate"
}
export declare class ListRepositoriesForApprovalRuleTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum;
}
export declare class ListRepositoriesForApprovalRuleTemplateRequest extends SpeakeasyBase {
    queryParams: ListRepositoriesForApprovalRuleTemplateQueryParams;
    headers: ListRepositoriesForApprovalRuleTemplateHeaders;
    request: shared.ListRepositoriesForApprovalRuleTemplateInput;
}
export declare class ListRepositoriesForApprovalRuleTemplateResponse extends SpeakeasyBase {
    approvalRuleTemplateDoesNotExistException?: any;
    approvalRuleTemplateNameRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidApprovalRuleTemplateNameException?: any;
    invalidContinuationTokenException?: any;
    invalidMaxResultsException?: any;
    listRepositoriesForApprovalRuleTemplateOutput?: shared.ListRepositoriesForApprovalRuleTemplateOutput;
    statusCode: number;
}
