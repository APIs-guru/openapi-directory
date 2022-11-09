import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetIdentityPoolConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" })
  identityPoolId: string;
}


export class SetIdentityPoolConfigurationHeaders extends SpeakeasyBase {
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


// SetIdentityPoolConfigurationRequestBodyCognitoStreams
/** 
 * Configuration options for configure Cognito streams.
**/
export class SetIdentityPoolConfigurationRequestBodyCognitoStreams extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;

  @Metadata({ data: "json, name=StreamingStatus" })
  streamingStatus?: shared.StreamingStatusEnum;
}


// SetIdentityPoolConfigurationRequestBodyPushSync
/** 
 * Configuration options to be applied to the identity pool.
**/
export class SetIdentityPoolConfigurationRequestBodyPushSync extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationArns" })
  applicationArns?: string[];

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}


export class SetIdentityPoolConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CognitoStreams" })
  cognitoStreams?: SetIdentityPoolConfigurationRequestBodyCognitoStreams;

  @Metadata({ data: "json, name=PushSync" })
  pushSync?: SetIdentityPoolConfigurationRequestBodyPushSync;
}


export class SetIdentityPoolConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetIdentityPoolConfigurationPathParams;

  @Metadata()
  headers: SetIdentityPoolConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SetIdentityPoolConfigurationRequestBody;
}


export class SetIdentityPoolConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

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
  setIdentityPoolConfigurationResponse?: shared.SetIdentityPoolConfigurationResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
