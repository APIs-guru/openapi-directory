import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeIdentityProviderConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DescribeIdentityProviderConfigHeaders extends SpeakeasyBase {
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


// DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig
/** 
 * An object representing an identity provider configuration.
**/
export class DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class DescribeIdentityProviderConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityProviderConfig" })
  identityProviderConfig: DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig;
}


export class DescribeIdentityProviderConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DescribeIdentityProviderConfigPathParams;

  @Metadata()
  headers: DescribeIdentityProviderConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeIdentityProviderConfigRequestBody;
}


export class DescribeIdentityProviderConfigResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeIdentityProviderConfigResponse?: shared.DescribeIdentityProviderConfigResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
