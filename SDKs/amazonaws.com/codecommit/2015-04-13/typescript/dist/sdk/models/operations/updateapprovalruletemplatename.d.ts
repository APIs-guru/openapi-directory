import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateApprovalRuleTemplateNameXAmzTargetEnum {
    CodeCommit20150413UpdateApprovalRuleTemplateName = "CodeCommit_20150413.UpdateApprovalRuleTemplateName"
}
export declare class UpdateApprovalRuleTemplateNameHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApprovalRuleTemplateNameXAmzTargetEnum;
}
export declare class UpdateApprovalRuleTemplateNameRequest extends SpeakeasyBase {
    headers: UpdateApprovalRuleTemplateNameHeaders;
    request: shared.UpdateApprovalRuleTemplateNameInput;
}
export declare class UpdateApprovalRuleTemplateNameResponse extends SpeakeasyBase {
    approvalRuleTemplateDoesNotExistException?: any;
    approvalRuleTemplateNameAlreadyExistsException?: any;
    approvalRuleTemplateNameRequiredException?: any;
    contentType: string;
    invalidApprovalRuleTemplateNameException?: any;
    statusCode: number;
    updateApprovalRuleTemplateNameOutput?: shared.UpdateApprovalRuleTemplateNameOutput;
}
