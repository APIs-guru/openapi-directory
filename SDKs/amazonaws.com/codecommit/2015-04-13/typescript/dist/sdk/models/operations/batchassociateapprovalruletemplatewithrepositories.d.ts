import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories = "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories"
}
export declare class BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum;
}
export declare class BatchAssociateApprovalRuleTemplateWithRepositoriesRequest extends SpeakeasyBase {
    headers: BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders;
    request: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
}
export declare class BatchAssociateApprovalRuleTemplateWithRepositoriesResponse extends SpeakeasyBase {
    approvalRuleTemplateDoesNotExistException?: any;
    approvalRuleTemplateNameRequiredException?: any;
    batchAssociateApprovalRuleTemplateWithRepositoriesOutput?: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidApprovalRuleTemplateNameException?: any;
    maximumRepositoryNamesExceededException?: any;
    repositoryNamesRequiredException?: any;
    statusCode: number;
}
