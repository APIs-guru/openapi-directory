import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateExperimentTemplatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateExperimentTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateExperimentTemplateRequestBody extends SpeakeasyBase {
    actions?: Map<string, shared.UpdateExperimentTemplateActionInputItem>;
    description?: string;
    roleArn?: string;
    stopConditions?: shared.UpdateExperimentTemplateStopConditionInput[];
    targets?: Map<string, shared.UpdateExperimentTemplateTargetInput>;
}
export declare class UpdateExperimentTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateExperimentTemplatePathParams;
    headers: UpdateExperimentTemplateHeaders;
    request: UpdateExperimentTemplateRequestBody;
}
export declare class UpdateExperimentTemplateResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    updateExperimentTemplateResponse?: shared.UpdateExperimentTemplateResponse;
    validationException?: any;
}
