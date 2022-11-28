import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413DeleteApprovalRuleTemplate = "CodeCommit_20150413.DeleteApprovalRuleTemplate"
}
export declare class DeleteApprovalRuleTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApprovalRuleTemplateXAmzTargetEnum;
}
export declare class DeleteApprovalRuleTemplateRequest extends SpeakeasyBase {
    headers: DeleteApprovalRuleTemplateHeaders;
    request: shared.DeleteApprovalRuleTemplateInput;
}
export declare class DeleteApprovalRuleTemplateResponse extends SpeakeasyBase {
    approvalRuleTemplateInUseException?: any;
    approvalRuleTemplateNameRequiredException?: any;
    contentType: string;
    deleteApprovalRuleTemplateOutput?: shared.DeleteApprovalRuleTemplateOutput;
    invalidApprovalRuleTemplateNameException?: any;
    statusCode: number;
}
