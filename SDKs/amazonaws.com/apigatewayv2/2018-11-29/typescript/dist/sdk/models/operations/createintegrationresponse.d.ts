import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateIntegrationResponsePathParams extends SpeakeasyBase {
    apiId: string;
    integrationId: string;
}
export declare class CreateIntegrationResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}
export declare class CreateIntegrationResponseRequestBody extends SpeakeasyBase {
    contentHandlingStrategy?: CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum;
    integrationResponseKey: string;
    responseParameters?: Map<string, string>;
    responseTemplates?: Map<string, string>;
    templateSelectionExpression?: string;
}
export declare class CreateIntegrationResponseRequest extends SpeakeasyBase {
    pathParams: CreateIntegrationResponsePathParams;
    headers: CreateIntegrationResponseHeaders;
    request: CreateIntegrationResponseRequestBody;
}
export declare class CreateIntegrationResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createIntegrationResponseResponse?: shared.CreateIntegrationResponseResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
