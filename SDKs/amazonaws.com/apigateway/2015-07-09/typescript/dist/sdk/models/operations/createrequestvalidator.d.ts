import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRequestValidatorPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class CreateRequestValidatorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRequestValidatorRequestBody extends SpeakeasyBase {
    name?: string;
    validateRequestBody?: boolean;
    validateRequestParameters?: boolean;
}
export declare class CreateRequestValidatorRequest extends SpeakeasyBase {
    pathParams: CreateRequestValidatorPathParams;
    headers: CreateRequestValidatorHeaders;
    request: CreateRequestValidatorRequestBody;
}
export declare class CreateRequestValidatorResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    requestValidator?: shared.RequestValidator;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
