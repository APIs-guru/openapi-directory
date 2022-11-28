import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateApprovalRuleTemplateContentXAmzTargetEnum {
    CodeCommit20150413UpdateApprovalRuleTemplateContent = "CodeCommit_20150413.UpdateApprovalRuleTemplateContent"
}
export declare class UpdateApprovalRuleTemplateContentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApprovalRuleTemplateContentXAmzTargetEnum;
}
export declare class UpdateApprovalRuleTemplateContentRequest extends SpeakeasyBase {
    headers: UpdateApprovalRuleTemplateContentHeaders;
    request: shared.UpdateApprovalRuleTemplateContentInput;
}
export declare class UpdateApprovalRuleTemplateContentResponse extends SpeakeasyBase {
    approvalRuleTemplateContentRequiredException?: any;
    approvalRuleTemplateDoesNotExistException?: any;
    approvalRuleTemplateNameRequiredException?: any;
    contentType: string;
    invalidApprovalRuleTemplateContentException?: any;
    invalidApprovalRuleTemplateNameException?: any;
    invalidRuleContentSha256Exception?: any;
    statusCode: number;
    updateApprovalRuleTemplateContentOutput?: shared.UpdateApprovalRuleTemplateContentOutput;
}
