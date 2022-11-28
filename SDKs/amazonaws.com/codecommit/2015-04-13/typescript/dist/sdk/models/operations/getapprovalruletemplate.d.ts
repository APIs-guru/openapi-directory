import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413GetApprovalRuleTemplate = "CodeCommit_20150413.GetApprovalRuleTemplate"
}
export declare class GetApprovalRuleTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetApprovalRuleTemplateXAmzTargetEnum;
}
export declare class GetApprovalRuleTemplateRequest extends SpeakeasyBase {
    headers: GetApprovalRuleTemplateHeaders;
    request: shared.GetApprovalRuleTemplateInput;
}
export declare class GetApprovalRuleTemplateResponse extends SpeakeasyBase {
    approvalRuleTemplateDoesNotExistException?: any;
    approvalRuleTemplateNameRequiredException?: any;
    contentType: string;
    getApprovalRuleTemplateOutput?: shared.GetApprovalRuleTemplateOutput;
    invalidApprovalRuleTemplateNameException?: any;
    statusCode: number;
}
