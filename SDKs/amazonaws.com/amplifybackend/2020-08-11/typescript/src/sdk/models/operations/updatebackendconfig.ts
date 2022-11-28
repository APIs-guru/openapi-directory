import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBackendConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class UpdateBackendConfigHeaders extends SpeakeasyBase {
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


// UpdateBackendConfigRequestBodyLoginAuthConfig
/** 
 * The request object for this operation.
**/
export class UpdateBackendConfigRequestBodyLoginAuthConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsCognitoIdentityPoolId" })
  awsCognitoIdentityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsCognitoRegion" })
  awsCognitoRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsUserPoolsId" })
  awsUserPoolsId?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsUserPoolsWebClientId" })
  awsUserPoolsWebClientId?: string;
}


export class UpdateBackendConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loginAuthConfig" })
  loginAuthConfig?: UpdateBackendConfigRequestBodyLoginAuthConfig;
}


export class UpdateBackendConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBackendConfigPathParams;

  @SpeakeasyMetadata()
  headers: UpdateBackendConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateBackendConfigRequestBody;
}


export class UpdateBackendConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  gatewayTimeoutException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateBackendConfigResponse?: shared.UpdateBackendConfigResponse;
}
