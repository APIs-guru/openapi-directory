import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateIntegrationPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class CreateIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateIntegrationRequestBodyConnectionTypeEnum {
    Internet = "INTERNET",
    VpcLink = "VPC_LINK"
}
export declare enum CreateIntegrationRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}
export declare enum CreateIntegrationRequestBodyIntegrationTypeEnum {
    Aws = "AWS",
    Http = "HTTP",
    Mock = "MOCK",
    HttpProxy = "HTTP_PROXY",
    AwsProxy = "AWS_PROXY"
}
export declare enum CreateIntegrationRequestBodyPassthroughBehaviorEnum {
    WhenNoMatch = "WHEN_NO_MATCH",
    Never = "NEVER",
    WhenNoTemplates = "WHEN_NO_TEMPLATES"
}
/**
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
export declare class CreateIntegrationRequestBodyTlsConfig extends SpeakeasyBase {
    serverNameToVerify?: string;
}
export declare class CreateIntegrationRequestBody extends SpeakeasyBase {
    connectionId?: string;
    connectionType?: CreateIntegrationRequestBodyConnectionTypeEnum;
    contentHandlingStrategy?: CreateIntegrationRequestBodyContentHandlingStrategyEnum;
    credentialsArn?: string;
    description?: string;
    integrationMethod?: string;
    integrationSubtype?: string;
    integrationType: CreateIntegrationRequestBodyIntegrationTypeEnum;
    integrationUri?: string;
    passthroughBehavior?: CreateIntegrationRequestBodyPassthroughBehaviorEnum;
    payloadFormatVersion?: string;
    requestParameters?: Map<string, string>;
    requestTemplates?: Map<string, string>;
    responseParameters?: Map<string, Map<string, string>>;
    templateSelectionExpression?: string;
    timeoutInMillis?: number;
    tlsConfig?: CreateIntegrationRequestBodyTlsConfig;
}
export declare class CreateIntegrationRequest extends SpeakeasyBase {
    pathParams: CreateIntegrationPathParams;
    headers: CreateIntegrationHeaders;
    request: CreateIntegrationRequestBody;
}
export declare class CreateIntegrationResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createIntegrationResult?: shared.CreateIntegrationResult;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
