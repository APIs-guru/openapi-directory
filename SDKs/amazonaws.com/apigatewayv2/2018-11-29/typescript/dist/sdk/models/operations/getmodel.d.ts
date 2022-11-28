import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetModelPathParams extends SpeakeasyBase {
    apiId: string;
    modelId: string;
}
export declare class GetModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModelRequest extends SpeakeasyBase {
    pathParams: GetModelPathParams;
    headers: GetModelHeaders;
}
export declare class GetModelResponse extends SpeakeasyBase {
    contentType: string;
    getModelResponse?: shared.GetModelResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
