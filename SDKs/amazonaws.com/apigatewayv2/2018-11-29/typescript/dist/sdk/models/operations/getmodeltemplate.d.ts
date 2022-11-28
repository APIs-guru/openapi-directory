import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetModelTemplatePathParams extends SpeakeasyBase {
    apiId: string;
    modelId: string;
}
export declare class GetModelTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModelTemplateRequest extends SpeakeasyBase {
    pathParams: GetModelTemplatePathParams;
    headers: GetModelTemplateHeaders;
}
export declare class GetModelTemplateResponse extends SpeakeasyBase {
    contentType: string;
    getModelTemplateResponse?: shared.GetModelTemplateResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
