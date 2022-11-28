import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateIntegrationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationId" })
  integrationId: string;
}


export class UpdateIntegrationHeaders extends SpeakeasyBase {
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

export enum UpdateIntegrationRequestBodyConnectionTypeEnum {
    Internet = "INTERNET",
    VpcLink = "VPC_LINK"
}

export enum UpdateIntegrationRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}

export enum UpdateIntegrationRequestBodyIntegrationTypeEnum {
    Aws = "AWS",
    Http = "HTTP",
    Mock = "MOCK",
    HttpProxy = "HTTP_PROXY",
    AwsProxy = "AWS_PROXY"
}

export enum UpdateIntegrationRequestBodyPassthroughBehaviorEnum {
    WhenNoMatch = "WHEN_NO_MATCH",
    Never = "NEVER",
    WhenNoTemplates = "WHEN_NO_TEMPLATES"
}


// UpdateIntegrationRequestBodyTlsConfig
/** 
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
export class UpdateIntegrationRequestBodyTlsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerNameToVerify" })
  serverNameToVerify?: string;
}


export class UpdateIntegrationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionType" })
  connectionType?: UpdateIntegrationRequestBodyConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=contentHandlingStrategy" })
  contentHandlingStrategy?: UpdateIntegrationRequestBodyContentHandlingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=credentialsArn" })
  credentialsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationMethod" })
  integrationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationSubtype" })
  integrationSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationType" })
  integrationType?: UpdateIntegrationRequestBodyIntegrationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=integrationUri" })
  integrationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=passthroughBehavior" })
  passthroughBehavior?: UpdateIntegrationRequestBodyPassthroughBehaviorEnum;

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
  tlsConfig?: UpdateIntegrationRequestBodyTlsConfig;
}


export class UpdateIntegrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateIntegrationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateIntegrationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateIntegrationRequestBody;
}


export class UpdateIntegrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateIntegrationResult?: shared.UpdateIntegrationResult;
}
