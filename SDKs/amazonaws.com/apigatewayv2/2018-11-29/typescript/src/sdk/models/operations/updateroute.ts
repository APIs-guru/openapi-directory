import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=routeId" })
  routeId: string;
}


export class UpdateRouteHeaders extends SpeakeasyBase {
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

export enum UpdateRouteRequestBodyAuthorizationTypeEnum {
    None = "NONE"
,    AwsIam = "AWS_IAM"
,    Custom = "CUSTOM"
,    Jwt = "JWT"
}


export class UpdateRouteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeyRequired" })
  apiKeyRequired?: boolean;

  @Metadata({ data: "json, name=authorizationScopes" })
  authorizationScopes?: string[];

  @Metadata({ data: "json, name=authorizationType" })
  authorizationType?: UpdateRouteRequestBodyAuthorizationTypeEnum;

  @Metadata({ data: "json, name=authorizerId" })
  authorizerId?: string;

  @Metadata({ data: "json, name=modelSelectionExpression" })
  modelSelectionExpression?: string;

  @Metadata({ data: "json, name=operationName" })
  operationName?: string;

  @Metadata({ data: "json, name=requestModels" })
  requestModels?: Map<string, string>;

  @Metadata({ data: "json, name=requestParameters", elemType: shared.ParameterConstraints })
  requestParameters?: Map<string, shared.ParameterConstraints>;

  @Metadata({ data: "json, name=routeKey" })
  routeKey?: string;

  @Metadata({ data: "json, name=routeResponseSelectionExpression" })
  routeResponseSelectionExpression?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;
}


export class UpdateRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRoutePathParams;

  @Metadata()
  headers: UpdateRouteHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateRouteRequestBody;
}


export class UpdateRouteResponse extends SpeakeasyBase {
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
  updateRouteResult?: shared.UpdateRouteResult;
}
