import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routeId" })
  routeId: string;
}


export class UpdateRouteHeaders extends SpeakeasyBase {
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

export enum UpdateRouteRequestBodyAuthorizationTypeEnum {
    None = "NONE",
    AwsIam = "AWS_IAM",
    Custom = "CUSTOM",
    Jwt = "JWT"
}


export class UpdateRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyRequired" })
  apiKeyRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=authorizationScopes" })
  authorizationScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=authorizationType" })
  authorizationType?: UpdateRouteRequestBodyAuthorizationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=authorizerId" })
  authorizerId?: string;

  @SpeakeasyMetadata({ data: "json, name=modelSelectionExpression" })
  modelSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=operationName" })
  operationName?: string;

  @SpeakeasyMetadata({ data: "json, name=requestModels" })
  requestModels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=requestParameters", elemType: shared.ParameterConstraints })
  requestParameters?: Map<string, shared.ParameterConstraints>;

  @SpeakeasyMetadata({ data: "json, name=routeKey" })
  routeKey?: string;

  @SpeakeasyMetadata({ data: "json, name=routeResponseSelectionExpression" })
  routeResponseSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;
}


export class UpdateRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRoutePathParams;

  @SpeakeasyMetadata()
  headers: UpdateRouteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateRouteRequestBody;
}


export class UpdateRouteResponse extends SpeakeasyBase {
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
  updateRouteResult?: shared.UpdateRouteResult;
}
