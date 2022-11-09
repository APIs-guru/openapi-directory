import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutIntegrationResponsePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=http_method" })
  httpMethod: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=status_code" })
  statusCode: string;
}


export class PutIntegrationResponseHeaders extends SpeakeasyBase {
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

export enum PutIntegrationResponseRequestBodyContentHandlingEnum {
    ConvertToBinary = "CONVERT_TO_BINARY"
,    ConvertToText = "CONVERT_TO_TEXT"
}


export class PutIntegrationResponseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentHandling" })
  contentHandling?: PutIntegrationResponseRequestBodyContentHandlingEnum;

  @Metadata({ data: "json, name=responseParameters" })
  responseParameters?: Map<string, string>;

  @Metadata({ data: "json, name=responseTemplates" })
  responseTemplates?: Map<string, string>;

  @Metadata({ data: "json, name=selectionPattern" })
  selectionPattern?: string;
}


export class PutIntegrationResponseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutIntegrationResponsePathParams;

  @Metadata()
  headers: PutIntegrationResponseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutIntegrationResponseRequestBody;
}


export class PutIntegrationResponseResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  integrationResponse?: shared.IntegrationResponse;

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
