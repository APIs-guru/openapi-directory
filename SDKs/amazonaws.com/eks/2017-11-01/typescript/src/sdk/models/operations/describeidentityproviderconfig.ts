import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeIdentityProviderConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DescribeIdentityProviderConfigHeaders extends SpeakeasyBase {
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


// DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig
/** 
 * An object representing an identity provider configuration.
**/
export class DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class DescribeIdentityProviderConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityProviderConfig" })
  identityProviderConfig: DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig;
}


export class DescribeIdentityProviderConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DescribeIdentityProviderConfigPathParams;

  @SpeakeasyMetadata()
  headers: DescribeIdentityProviderConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DescribeIdentityProviderConfigRequestBody;
}


export class DescribeIdentityProviderConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeIdentityProviderConfigResponse?: shared.DescribeIdentityProviderConfigResponse;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
