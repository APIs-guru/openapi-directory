import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMethodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=http_method" })
  httpMethod: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class PutMethodHeaders extends SpeakeasyBase {
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


export class PutMethodRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyRequired" })
  apiKeyRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=authorizationScopes" })
  authorizationScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=authorizationType" })
  authorizationType: string;

  @SpeakeasyMetadata({ data: "json, name=authorizerId" })
  authorizerId?: string;

  @SpeakeasyMetadata({ data: "json, name=operationName" })
  operationName?: string;

  @SpeakeasyMetadata({ data: "json, name=requestModels" })
  requestModels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=requestParameters" })
  requestParameters?: Map<string, boolean>;

  @SpeakeasyMetadata({ data: "json, name=requestValidatorId" })
  requestValidatorId?: string;
}


export class PutMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutMethodPathParams;

  @SpeakeasyMetadata()
  headers: PutMethodHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutMethodRequestBody;
}


export class PutMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  method?: shared.Method;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
