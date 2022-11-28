import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutIntegrationResponsePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=http_method" })
  httpMethod: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status_code" })
  statusCode: string;
}


export class PutIntegrationResponseHeaders extends SpeakeasyBase {
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

export enum PutIntegrationResponseRequestBodyContentHandlingEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}


export class PutIntegrationResponseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentHandling" })
  contentHandling?: PutIntegrationResponseRequestBodyContentHandlingEnum;

  @SpeakeasyMetadata({ data: "json, name=responseParameters" })
  responseParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=responseTemplates" })
  responseTemplates?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=selectionPattern" })
  selectionPattern?: string;
}


export class PutIntegrationResponseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutIntegrationResponsePathParams;

  @SpeakeasyMetadata()
  headers: PutIntegrationResponseHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutIntegrationResponseRequestBody;
}


export class PutIntegrationResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  integrationResponse?: shared.IntegrationResponse;

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
