import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetCognitoEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" })
  identityPoolId: string;
}


export class SetCognitoEventsHeaders extends SpeakeasyBase {
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


export class SetCognitoEventsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Events" })
  events: Map<string, string>;
}


export class SetCognitoEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetCognitoEventsPathParams;

  @Metadata()
  headers: SetCognitoEventsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SetCognitoEventsRequestBody;
}


export class SetCognitoEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
