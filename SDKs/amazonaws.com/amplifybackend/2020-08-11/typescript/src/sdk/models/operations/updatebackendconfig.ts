import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBackendConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class UpdateBackendConfigHeaders extends SpeakeasyBase {
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


// UpdateBackendConfigRequestBodyLoginAuthConfig
/** 
 * The request object for this operation.
**/
export class UpdateBackendConfigRequestBodyLoginAuthConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsCognitoIdentityPoolId" })
  awsCognitoIdentityPoolId?: string;

  @Metadata({ data: "json, name=AwsCognitoRegion" })
  awsCognitoRegion?: string;

  @Metadata({ data: "json, name=AwsUserPoolsId" })
  awsUserPoolsId?: string;

  @Metadata({ data: "json, name=AwsUserPoolsWebClientId" })
  awsUserPoolsWebClientId?: string;
}


export class UpdateBackendConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=loginAuthConfig" })
  loginAuthConfig?: UpdateBackendConfigRequestBodyLoginAuthConfig;
}


export class UpdateBackendConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBackendConfigPathParams;

  @Metadata()
  headers: UpdateBackendConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateBackendConfigRequestBody;
}


export class UpdateBackendConfigResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  gatewayTimeoutException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateBackendConfigResponse?: shared.UpdateBackendConfigResponse;
}
