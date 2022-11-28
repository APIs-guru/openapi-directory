import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteExperimentTemplatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteExperimentTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteExperimentTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteExperimentTemplatePathParams;
    headers: DeleteExperimentTemplateHeaders;
}
export declare class DeleteExperimentTemplateResponse extends SpeakeasyBase {
    contentType: string;
    deleteExperimentTemplateResponse?: shared.DeleteExperimentTemplateResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
