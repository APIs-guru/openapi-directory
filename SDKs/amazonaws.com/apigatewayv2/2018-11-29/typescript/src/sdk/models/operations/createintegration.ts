import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateIntegrationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class CreateIntegrationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum CreateIntegrationRequestBodyConnectionTypeEnum {
    Internet = "INTERNET"
,    VpcLink = "VPC_LINK"
}

export enum CreateIntegrationRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY"
,    ConvertToText = "CONVERT_TO_TEXT"
}

export enum CreateIntegrationRequestBodyIntegrationTypeEnum {
    Aws = "AWS"
,    Http = "HTTP"
,    Mock = "MOCK"
,    HttpProxy = "HTTP_PROXY"
,    AwsProxy = "AWS_PROXY"
}

export enum CreateIntegrationRequestBodyPassthroughBehaviorEnum {
    WhenNoMatch = "WHEN_NO_MATCH"
,    Never = "NEVER"
,    WhenNoTemplates = "WHEN_NO_TEMPLATES"
}


// CreateIntegrationRequestBodyTlsConfig
/** 
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
export class CreateIntegrationRequestBodyTlsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerNameToVerify" })
  serverNameToVerify?: string;
}


export class CreateIntegrationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @Metadata({ data: "json, name=connectionType" })
  connectionType?: CreateIntegrationRequestBodyConnectionTypeEnum;

  @Metadata({ data: "json, name=contentHandlingStrategy" })
  contentHandlingStrategy?: CreateIntegrationRequestBodyContentHandlingStrategyEnum;

  @Metadata({ data: "json, name=credentialsArn" })
  credentialsArn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=integrationMethod" })
  integrationMethod?: string;

  @Metadata({ data: "json, name=integrationSubtype" })
  integrationSubtype?: string;

  @Metadata({ data: "json, name=integrationType" })
  integrationType: CreateIntegrationRequestBodyIntegrationTypeEnum;

  @Metadata({ data: "json, name=integrationUri" })
  integrationUri?: string;

  @Metadata({ data: "json, name=passthroughBehavior" })
  passthroughBehavior?: CreateIntegrationRequestBodyPassthroughBehaviorEnum;

  @Metadata({ data: "json, name=payloadFormatVersion" })
  payloadFormatVersion?: string;

  @Metadata({ data: "json, name=requestParameters" })
  requestParameters?: Map<string, string>;

  @Metadata({ data: "json, name=requestTemplates" })
  requestTemplates?: Map<string, string>;

  @Metadata({ data: "json, name=responseParameters" })
  responseParameters?: Map<string, Map<string, string>>;

  @Metadata({ data: "json, name=templateSelectionExpression" })
  templateSelectionExpression?: string;

  @Metadata({ data: "json, name=timeoutInMillis" })
  timeoutInMillis?: number;

  @Metadata({ data: "json, name=tlsConfig" })
  tlsConfig?: CreateIntegrationRequestBodyTlsConfig;
}


export class CreateIntegrationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateIntegrationPathParams;

  @Metadata()
  headers: CreateIntegrationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateIntegrationRequestBody;
}


export class CreateIntegrationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createIntegrationResult?: shared.CreateIntegrationResult;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
