import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutIntegrationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=http_method" })
  httpMethod: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class PutIntegrationHeaders extends SpeakeasyBase {
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

export enum PutIntegrationRequestBodyConnectionTypeEnum {
    Internet = "INTERNET",
    VpcLink = "VPC_LINK"
}

export enum PutIntegrationRequestBodyContentHandlingEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}


export class PutIntegrationRequestBodyTlsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insecureSkipVerification" })
  insecureSkipVerification?: boolean;
}

export enum PutIntegrationRequestBodyTypeEnum {
    Http = "HTTP",
    Aws = "AWS",
    Mock = "MOCK",
    HttpProxy = "HTTP_PROXY",
    AwsProxy = "AWS_PROXY"
}


export class PutIntegrationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheKeyParameters" })
  cacheKeyParameters?: string[];

  @SpeakeasyMetadata({ data: "json, name=cacheNamespace" })
  cacheNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionType" })
  connectionType?: PutIntegrationRequestBodyConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=contentHandling" })
  contentHandling?: PutIntegrationRequestBodyContentHandlingEnum;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: string;

  @SpeakeasyMetadata({ data: "json, name=httpMethod" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=passthroughBehavior" })
  passthroughBehavior?: string;

  @SpeakeasyMetadata({ data: "json, name=requestParameters" })
  requestParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=requestTemplates" })
  requestTemplates?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMillis" })
  timeoutInMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=tlsConfig" })
  tlsConfig?: PutIntegrationRequestBodyTlsConfig;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PutIntegrationRequestBodyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class PutIntegrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutIntegrationPathParams;

  @SpeakeasyMetadata()
  headers: PutIntegrationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutIntegrationRequestBody;
}


export class PutIntegrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  integration?: shared.Integration;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
