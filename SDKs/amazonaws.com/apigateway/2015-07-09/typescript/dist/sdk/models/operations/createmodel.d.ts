import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateModelPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class CreateModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateModelRequestBody extends SpeakeasyBase {
    contentType: string;
    description?: string;
    name: string;
    schema?: string;
}
export declare class CreateModelRequest extends SpeakeasyBase {
    pathParams: CreateModelPathParams;
    headers: CreateModelHeaders;
    request: CreateModelRequestBody;
}
export declare class CreateModelResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    model?: shared.Model;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
