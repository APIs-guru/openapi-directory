import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssociateIdentityProviderConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class AssociateIdentityProviderConfigHeaders extends SpeakeasyBase {
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


// AssociateIdentityProviderConfigRequestBodyOidc
/** 
 * An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.
**/
export class AssociateIdentityProviderConfigRequestBodyOidc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupsClaim" })
  groupsClaim?: string;

  @SpeakeasyMetadata({ data: "json, name=groupsPrefix" })
  groupsPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=identityProviderConfigName" })
  identityProviderConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=issuerUrl" })
  issuerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=requiredClaims" })
  requiredClaims?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=usernameClaim" })
  usernameClaim?: string;

  @SpeakeasyMetadata({ data: "json, name=usernamePrefix" })
  usernamePrefix?: string;
}


export class AssociateIdentityProviderConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=oidc" })
  oidc: AssociateIdentityProviderConfigRequestBodyOidc;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class AssociateIdentityProviderConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssociateIdentityProviderConfigPathParams;

  @SpeakeasyMetadata()
  headers: AssociateIdentityProviderConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AssociateIdentityProviderConfigRequestBody;
}


export class AssociateIdentityProviderConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associateIdentityProviderConfigResponse?: shared.AssociateIdentityProviderConfigResponse;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
