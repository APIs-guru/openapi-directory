import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateIntegrationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=integrationId" })
  integrationId: string;
}


export class UpdateIntegrationHeaders extends SpeakeasyBase {
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

export enum UpdateIntegrationRequestBodyConnectionTypeEnum {
    Internet = "INTERNET"
,    VpcLink = "VPC_LINK"
}

export enum UpdateIntegrationRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY"
,    ConvertToText = "CONVERT_TO_TEXT"
}

export enum UpdateIntegrationRequestBodyIntegrationTypeEnum {
    Aws = "AWS"
,    Http = "HTTP"
,    Mock = "MOCK"
,    HttpProxy = "HTTP_PROXY"
,    AwsProxy = "AWS_PROXY"
}

export enum UpdateIntegrationRequestBodyPassthroughBehaviorEnum {
    WhenNoMatch = "WHEN_NO_MATCH"
,    Never = "NEVER"
,    WhenNoTemplates = "WHEN_NO_TEMPLATES"
}


// UpdateIntegrationRequestBodyTlsConfig
/** 
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
export class UpdateIntegrationRequestBodyTlsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerNameToVerify" })
  serverNameToVerify?: string;
}


export class UpdateIntegrationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @Metadata({ data: "json, name=connectionType" })
  connectionType?: UpdateIntegrationRequestBodyConnectionTypeEnum;

  @Metadata({ data: "json, name=contentHandlingStrategy" })
  contentHandlingStrategy?: UpdateIntegrationRequestBodyContentHandlingStrategyEnum;

  @Metadata({ data: "json, name=credentialsArn" })
  credentialsArn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=integrationMethod" })
  integrationMethod?: string;

  @Metadata({ data: "json, name=integrationSubtype" })
  integrationSubtype?: string;

  @Metadata({ data: "json, name=integrationType" })
  integrationType?: UpdateIntegrationRequestBodyIntegrationTypeEnum;

  @Metadata({ data: "json, name=integrationUri" })
  integrationUri?: string;

  @Metadata({ data: "json, name=passthroughBehavior" })
  passthroughBehavior?: UpdateIntegrationRequestBodyPassthroughBehaviorEnum;

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
  tlsConfig?: UpdateIntegrationRequestBodyTlsConfig;
}


export class UpdateIntegrationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateIntegrationPathParams;

  @Metadata()
  headers: UpdateIntegrationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateIntegrationRequestBody;
}


export class UpdateIntegrationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateIntegrationResult?: shared.UpdateIntegrationResult;
}
