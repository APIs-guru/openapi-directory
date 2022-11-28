import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositories = "CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories"
}
export declare class BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum;
}
export declare class BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest extends SpeakeasyBase {
    headers: BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders;
    request: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
}
export declare class BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse extends SpeakeasyBase {
    approvalRuleTemplateDoesNotExistException?: any;
    approvalRuleTemplateNameRequiredException?: any;
    batchDisassociateApprovalRuleTemplateFromRepositoriesOutput?: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput;
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
