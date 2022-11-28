import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAssessmentTemplateXAmzTargetEnum {
    InspectorServiceCreateAssessmentTemplate = "InspectorService.CreateAssessmentTemplate"
}
export declare class CreateAssessmentTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAssessmentTemplateXAmzTargetEnum;
}
export declare class CreateAssessmentTemplateRequest extends SpeakeasyBase {
    headers: CreateAssessmentTemplateHeaders;
    request: shared.CreateAssessmentTemplateRequest;
}
export declare class CreateAssessmentTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createAssessmentTemplateResponse?: shared.CreateAssessmentTemplateResponse;
    internalException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
