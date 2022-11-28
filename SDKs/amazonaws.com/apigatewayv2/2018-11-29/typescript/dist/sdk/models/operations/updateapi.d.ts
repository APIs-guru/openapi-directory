import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApiPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class UpdateApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
export declare class UpdateApiRequestBodyCorsConfiguration extends SpeakeasyBase {
    allowCredentials?: boolean;
    allowHeaders?: string[];
    allowMethods?: string[];
    allowOrigins?: string[];
    exposeHeaders?: string[];
    maxAge?: number;
}
export declare class UpdateApiRequestBody extends SpeakeasyBase {
    apiKeySelectionExpression?: string;
    corsConfiguration?: UpdateApiRequestBodyCorsConfiguration;
    credentialsArn?: string;
    description?: string;
    disableExecuteApiEndpoint?: boolean;
    disableSchemaValidation?: boolean;
    name?: string;
    routeKey?: string;
    routeSelectionExpression?: string;
    target?: string;
    version?: string;
}
export declare class UpdateApiRequest extends SpeakeasyBase {
    pathParams: UpdateApiPathParams;
    headers: UpdateApiHeaders;
    request: UpdateApiRequestBody;
}
export declare class UpdateApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateApiResponse?: shared.UpdateApiResponse;
}
