import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateModelPathParams extends SpeakeasyBase {
    apiId: string;
    modelId: string;
}
export declare class UpdateModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateModelRequestBody extends SpeakeasyBase {
    contentType?: string;
    description?: string;
    name?: string;
    schema?: string;
}
export declare class UpdateModelRequest extends SpeakeasyBase {
    pathParams: UpdateModelPathParams;
    headers: UpdateModelHeaders;
    request: UpdateModelRequestBody;
}
export declare class UpdateModelResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateModelResponse?: shared.UpdateModelResponse;
}
