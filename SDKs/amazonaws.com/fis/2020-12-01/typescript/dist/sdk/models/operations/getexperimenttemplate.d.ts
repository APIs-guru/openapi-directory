import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExperimentTemplatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetExperimentTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetExperimentTemplateRequest extends SpeakeasyBase {
    pathParams: GetExperimentTemplatePathParams;
    headers: GetExperimentTemplateHeaders;
}
export declare class GetExperimentTemplateResponse extends SpeakeasyBase {
    contentType: string;
    getExperimentTemplateResponse?: shared.GetExperimentTemplateResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
