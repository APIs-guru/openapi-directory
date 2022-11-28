import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetCognitoEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" })
  identityPoolId: string;
}


export class SetCognitoEventsHeaders extends SpeakeasyBase {
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


export class SetCognitoEventsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Events" })
  events: Map<string, string>;
}


export class SetCognitoEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetCognitoEventsPathParams;

  @SpeakeasyMetadata()
  headers: SetCognitoEventsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SetCognitoEventsRequestBody;
}


export class SetCognitoEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalErrorException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
