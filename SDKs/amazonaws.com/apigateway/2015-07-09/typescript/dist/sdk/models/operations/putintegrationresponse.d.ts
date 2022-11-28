import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutIntegrationResponsePathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
    statusCode: string;
}
export declare class PutIntegrationResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum PutIntegrationResponseRequestBodyContentHandlingEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}
export declare class PutIntegrationResponseRequestBody extends SpeakeasyBase {
    contentHandling?: PutIntegrationResponseRequestBodyContentHandlingEnum;
    responseParameters?: Map<string, string>;
    responseTemplates?: Map<string, string>;
    selectionPattern?: string;
}
export declare class PutIntegrationResponseRequest extends SpeakeasyBase {
    pathParams: PutIntegrationResponsePathParams;
    headers: PutIntegrationResponseHeaders;
    request: PutIntegrationResponseRequestBody;
}
export declare class PutIntegrationResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    integrationResponse?: shared.IntegrationResponse;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
