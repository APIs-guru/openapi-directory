import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum {
    CodeCommit20150413AssociateApprovalRuleTemplateWithRepository = "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository"
}
export declare class AssociateApprovalRuleTemplateWithRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum;
}
export declare class AssociateApprovalRuleTemplateWithRepositoryRequest extends SpeakeasyBase {
    headers: AssociateApprovalRuleTemplateWithRepositoryHeaders;
    request: shared.AssociateApprovalRuleTemplateWithRepositoryInput;
}
export declare class AssociateApprovalRuleTemplateWithRepositoryResponse extends SpeakeasyBase {
    approvalRuleTemplateDoesNotExistException?: any;
    approvalRuleTemplateNameRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidApprovalRuleTemplateNameException?: any;
    invalidRepositoryNameException?: any;
    maximumRuleTemplatesAssociatedWithRepositoryException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
