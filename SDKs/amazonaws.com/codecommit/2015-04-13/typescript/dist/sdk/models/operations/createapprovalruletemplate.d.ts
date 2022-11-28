import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413CreateApprovalRuleTemplate = "CodeCommit_20150413.CreateApprovalRuleTemplate"
}
export declare class CreateApprovalRuleTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApprovalRuleTemplateXAmzTargetEnum;
}
export declare class CreateApprovalRuleTemplateRequest extends SpeakeasyBase {
    headers: CreateApprovalRuleTemplateHeaders;
    request: shared.CreateApprovalRuleTemplateInput;
}
export declare class CreateApprovalRuleTemplateResponse extends SpeakeasyBase {
    approvalRuleTemplateContentRequiredException?: any;
    approvalRuleTemplateNameAlreadyExistsException?: any;
    approvalRuleTemplateNameRequiredException?: any;
    contentType: string;
    createApprovalRuleTemplateOutput?: shared.CreateApprovalRuleTemplateOutput;
    invalidApprovalRuleTemplateContentException?: any;
    invalidApprovalRuleTemplateDescriptionException?: any;
    invalidApprovalRuleTemplateNameException?: any;
    numberOfRuleTemplatesExceededException?: any;
    statusCode: number;
}
