import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum {
    CodeCommit20150413DisassociateApprovalRuleTemplateFromRepository = "CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository"
}
export declare class DisassociateApprovalRuleTemplateFromRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum;
}
export declare class DisassociateApprovalRuleTemplateFromRepositoryRequest extends SpeakeasyBase {
    headers: DisassociateApprovalRuleTemplateFromRepositoryHeaders;
    request: shared.DisassociateApprovalRuleTemplateFromRepositoryInput;
}
export declare class DisassociateApprovalRuleTemplateFromRepositoryResponse extends SpeakeasyBase {
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
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
