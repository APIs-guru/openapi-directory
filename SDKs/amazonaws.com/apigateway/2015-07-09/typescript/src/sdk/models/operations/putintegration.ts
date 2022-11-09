import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutIntegrationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=http_method" })
  httpMethod: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class PutIntegrationHeaders extends SpeakeasyBase {
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

export enum PutIntegrationRequestBodyConnectionTypeEnum {
    Internet = "INTERNET"
,    VpcLink = "VPC_LINK"
}

export enum PutIntegrationRequestBodyContentHandlingEnum {
    ConvertToBinary = "CONVERT_TO_BINARY"
,    ConvertToText = "CONVERT_TO_TEXT"
}


export class PutIntegrationRequestBodyTlsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=insecureSkipVerification" })
  insecureSkipVerification?: boolean;
}

export enum PutIntegrationRequestBodyTypeEnum {
    Http = "HTTP"
,    Aws = "AWS"
,    Mock = "MOCK"
,    HttpProxy = "HTTP_PROXY"
,    AwsProxy = "AWS_PROXY"
}


export class PutIntegrationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheKeyParameters" })
  cacheKeyParameters?: string[];

  @Metadata({ data: "json, name=cacheNamespace" })
  cacheNamespace?: string;

  @Metadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @Metadata({ data: "json, name=connectionType" })
  connectionType?: PutIntegrationRequestBodyConnectionTypeEnum;

  @Metadata({ data: "json, name=contentHandling" })
  contentHandling?: PutIntegrationRequestBodyContentHandlingEnum;

  @Metadata({ data: "json, name=credentials" })
  credentials?: string;

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod?: string;

  @Metadata({ data: "json, name=passthroughBehavior" })
  passthroughBehavior?: string;

  @Metadata({ data: "json, name=requestParameters" })
  requestParameters?: Map<string, string>;

  @Metadata({ data: "json, name=requestTemplates" })
  requestTemplates?: Map<string, string>;

  @Metadata({ data: "json, name=timeoutInMillis" })
  timeoutInMillis?: number;

  @Metadata({ data: "json, name=tlsConfig" })
  tlsConfig?: PutIntegrationRequestBodyTlsConfig;

  @Metadata({ data: "json, name=type" })
  type: PutIntegrationRequestBodyTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class PutIntegrationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutIntegrationPathParams;

  @Metadata()
  headers: PutIntegrationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutIntegrationRequestBody;
}


export class PutIntegrationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  integration?: shared.Integration;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
