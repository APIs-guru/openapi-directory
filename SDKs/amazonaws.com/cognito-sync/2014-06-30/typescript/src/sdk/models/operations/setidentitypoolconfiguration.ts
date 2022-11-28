import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetIdentityPoolConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" })
  identityPoolId: string;
}


export class SetIdentityPoolConfigurationHeaders extends SpeakeasyBase {
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


// SetIdentityPoolConfigurationRequestBodyCognitoStreams
/** 
 * Configuration options for configure Cognito streams.
**/
export class SetIdentityPoolConfigurationRequestBodyCognitoStreams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamingStatus" })
  streamingStatus?: shared.StreamingStatusEnum;
}


// SetIdentityPoolConfigurationRequestBodyPushSync
/** 
 * Configuration options to be applied to the identity pool.
**/
export class SetIdentityPoolConfigurationRequestBodyPushSync extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationArns" })
  applicationArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}


export class SetIdentityPoolConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CognitoStreams" })
  cognitoStreams?: SetIdentityPoolConfigurationRequestBodyCognitoStreams;

  @SpeakeasyMetadata({ data: "json, name=PushSync" })
  pushSync?: SetIdentityPoolConfigurationRequestBodyPushSync;
}


export class SetIdentityPoolConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetIdentityPoolConfigurationPathParams;

  @SpeakeasyMetadata()
  headers: SetIdentityPoolConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SetIdentityPoolConfigurationRequestBody;
}


export class SetIdentityPoolConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  concurrentModificationException?: any;

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
  setIdentityPoolConfigurationResponse?: shared.SetIdentityPoolConfigurationResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
