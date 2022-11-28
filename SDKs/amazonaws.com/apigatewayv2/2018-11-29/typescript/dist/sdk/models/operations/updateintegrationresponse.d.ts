import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateIntegrationResponsePathParams extends SpeakeasyBase {
    apiId: string;
    integrationId: string;
    integrationResponseId: string;
}
export declare class UpdateIntegrationResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}
export declare class UpdateIntegrationResponseRequestBody extends SpeakeasyBase {
    contentHandlingStrategy?: UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum;
    integrationResponseKey?: string;
    responseParameters?: Map<string, string>;
    responseTemplates?: Map<string, string>;
    templateSelectionExpression?: string;
}
export declare class UpdateIntegrationResponseRequest extends SpeakeasyBase {
    pathParams: UpdateIntegrationResponsePathParams;
    headers: UpdateIntegrationResponseHeaders;
    request: UpdateIntegrationResponseRequestBody;
}
export declare class UpdateIntegrationResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateIntegrationResponseResponse?: shared.UpdateIntegrationResponseResponse;
}
