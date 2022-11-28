import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateIntegrationPathParams extends SpeakeasyBase {
    apiId: string;
    integrationId: string;
}
export declare class UpdateIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateIntegrationRequestBodyConnectionTypeEnum {
    Internet = "INTERNET",
    VpcLink = "VPC_LINK"
}
export declare enum UpdateIntegrationRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}
export declare enum UpdateIntegrationRequestBodyIntegrationTypeEnum {
    Aws = "AWS",
    Http = "HTTP",
    Mock = "MOCK",
    HttpProxy = "HTTP_PROXY",
    AwsProxy = "AWS_PROXY"
}
export declare enum UpdateIntegrationRequestBodyPassthroughBehaviorEnum {
    WhenNoMatch = "WHEN_NO_MATCH",
    Never = "NEVER",
    WhenNoTemplates = "WHEN_NO_TEMPLATES"
}
/**
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
export declare class UpdateIntegrationRequestBodyTlsConfig extends SpeakeasyBase {
    serverNameToVerify?: string;
}
export declare class UpdateIntegrationRequestBody extends SpeakeasyBase {
    connectionId?: string;
    connectionType?: UpdateIntegrationRequestBodyConnectionTypeEnum;
    contentHandlingStrategy?: UpdateIntegrationRequestBodyContentHandlingStrategyEnum;
    credentialsArn?: string;
    description?: string;
    integrationMethod?: string;
    integrationSubtype?: string;
    integrationType?: UpdateIntegrationRequestBodyIntegrationTypeEnum;
    integrationUri?: string;
    passthroughBehavior?: UpdateIntegrationRequestBodyPassthroughBehaviorEnum;
    payloadFormatVersion?: string;
    requestParameters?: Map<string, string>;
    requestTemplates?: Map<string, string>;
    responseParameters?: Map<string, Map<string, string>>;
    templateSelectionExpression?: string;
    timeoutInMillis?: number;
    tlsConfig?: UpdateIntegrationRequestBodyTlsConfig;
}
export declare class UpdateIntegrationRequest extends SpeakeasyBase {
    pathParams: UpdateIntegrationPathParams;
    headers: UpdateIntegrationHeaders;
    request: UpdateIntegrationRequestBody;
}
export declare class UpdateIntegrationResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateIntegrationResult?: shared.UpdateIntegrationResult;
}
