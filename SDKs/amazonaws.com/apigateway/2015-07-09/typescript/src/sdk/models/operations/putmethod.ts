import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMethodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=http_method" })
  httpMethod: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class PutMethodHeaders extends SpeakeasyBase {
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


export class PutMethodRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeyRequired" })
  apiKeyRequired?: boolean;

  @Metadata({ data: "json, name=authorizationScopes" })
  authorizationScopes?: string[];

  @Metadata({ data: "json, name=authorizationType" })
  authorizationType: string;

  @Metadata({ data: "json, name=authorizerId" })
  authorizerId?: string;

  @Metadata({ data: "json, name=operationName" })
  operationName?: string;

  @Metadata({ data: "json, name=requestModels" })
  requestModels?: Map<string, string>;

  @Metadata({ data: "json, name=requestParameters" })
  requestParameters?: Map<string, boolean>;

  @Metadata({ data: "json, name=requestValidatorId" })
  requestValidatorId?: string;
}


export class PutMethodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutMethodPathParams;

  @Metadata()
  headers: PutMethodHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutMethodRequestBody;
}


export class PutMethodResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  method?: shared.Method;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
