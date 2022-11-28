import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateIntegrationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class CreateIntegrationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum CreateIntegrationRequestBodyConnectionTypeEnum {
    Internet = "INTERNET",
    VpcLink = "VPC_LINK"
}

export enum CreateIntegrationRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}

export enum CreateIntegrationRequestBodyIntegrationTypeEnum {
    Aws = "AWS",
    Http = "HTTP",
    Mock = "MOCK",
    HttpProxy = "HTTP_PROXY",
    AwsProxy = "AWS_PROXY"
}

export enum CreateIntegrationRequestBodyPassthroughBehaviorEnum {
    WhenNoMatch = "WHEN_NO_MATCH",
    Never = "NEVER",
    WhenNoTemplates = "WHEN_NO_TEMPLATES"
}


// CreateIntegrationRequestBodyTlsConfig
/** 
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
export class CreateIntegrationRequestBodyTlsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerNameToVerify" })
  serverNameToVerify?: string;
}


export class CreateIntegrationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionType" })
  connectionType?: CreateIntegrationRequestBodyConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=contentHandlingStrategy" })
  contentHandlingStrategy?: CreateIntegrationRequestBodyContentHandlingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=credentialsArn" })
  credentialsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationMethod" })
  integrationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationSubtype" })
  integrationSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationType" })
  integrationType: CreateIntegrationRequestBodyIntegrationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=integrationUri" })
  integrationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=passthroughBehavior" })
  passthroughBehavior?: CreateIntegrationRequestBodyPassthroughBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=payloadFormatVersion" })
  payloadFormatVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=requestParameters" })
  requestParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=requestTemplates" })
  requestTemplates?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=responseParameters" })
  responseParameters?: Map<string, Map<string, string>>;

  @SpeakeasyMetadata({ data: "json, name=templateSelectionExpression" })
  templateSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMillis" })
  timeoutInMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=tlsConfig" })
  tlsConfig?: CreateIntegrationRequestBodyTlsConfig;
}


export class CreateIntegrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateIntegrationPathParams;

  @SpeakeasyMetadata()
  headers: CreateIntegrationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateIntegrationRequestBody;
}


export class CreateIntegrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createIntegrationResult?: shared.CreateIntegrationResult;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
