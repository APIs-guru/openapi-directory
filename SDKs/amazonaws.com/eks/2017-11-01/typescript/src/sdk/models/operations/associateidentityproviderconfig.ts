import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssociateIdentityProviderConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class AssociateIdentityProviderConfigHeaders extends SpeakeasyBase {
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


// AssociateIdentityProviderConfigRequestBodyOidc
/** 
 * An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.
**/
export class AssociateIdentityProviderConfigRequestBodyOidc extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=groupsClaim" })
  groupsClaim?: string;

  @Metadata({ data: "json, name=groupsPrefix" })
  groupsPrefix?: string;

  @Metadata({ data: "json, name=identityProviderConfigName" })
  identityProviderConfigName?: string;

  @Metadata({ data: "json, name=issuerUrl" })
  issuerUrl?: string;

  @Metadata({ data: "json, name=requiredClaims" })
  requiredClaims?: Map<string, string>;

  @Metadata({ data: "json, name=usernameClaim" })
  usernameClaim?: string;

  @Metadata({ data: "json, name=usernamePrefix" })
  usernamePrefix?: string;
}


export class AssociateIdentityProviderConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=oidc" })
  oidc: AssociateIdentityProviderConfigRequestBodyOidc;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class AssociateIdentityProviderConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AssociateIdentityProviderConfigPathParams;

  @Metadata()
  headers: AssociateIdentityProviderConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateIdentityProviderConfigRequestBody;
}


export class AssociateIdentityProviderConfigResponse extends SpeakeasyBase {
  @Metadata()
  associateIdentityProviderConfigResponse?: shared.AssociateIdentityProviderConfigResponse;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
