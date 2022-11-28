import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum {
    CodeCommit20150413UpdateApprovalRuleTemplateDescription = "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription"
}
export declare class UpdateApprovalRuleTemplateDescriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum;
}
export declare class UpdateApprovalRuleTemplateDescriptionRequest extends SpeakeasyBase {
    headers: UpdateApprovalRuleTemplateDescriptionHeaders;
    request: shared.UpdateApprovalRuleTemplateDescriptionInput;
}
export declare class UpdateApprovalRuleTemplateDescriptionResponse extends SpeakeasyBase {
    approvalRuleTemplateDoesNotExistException?: any;
    approvalRuleTemplateNameRequiredException?: any;
    contentType: string;
    invalidApprovalRuleTemplateDescriptionException?: any;
    invalidApprovalRuleTemplateNameException?: any;
    statusCode: number;
    updateApprovalRuleTemplateDescriptionOutput?: shared.UpdateApprovalRuleTemplateDescriptionOutput;
}
