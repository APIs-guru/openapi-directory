import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssociateIdentityProviderConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AssociateIdentityProviderConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.
**/
export declare class AssociateIdentityProviderConfigRequestBodyOidc extends SpeakeasyBase {
    clientId?: string;
    groupsClaim?: string;
    groupsPrefix?: string;
    identityProviderConfigName?: string;
    issuerUrl?: string;
    requiredClaims?: Map<string, string>;
    usernameClaim?: string;
    usernamePrefix?: string;
}
export declare class AssociateIdentityProviderConfigRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    oidc: AssociateIdentityProviderConfigRequestBodyOidc;
    tags?: Map<string, string>;
}
export declare class AssociateIdentityProviderConfigRequest extends SpeakeasyBase {
    pathParams: AssociateIdentityProviderConfigPathParams;
    headers: AssociateIdentityProviderConfigHeaders;
    request: AssociateIdentityProviderConfigRequestBody;
}
export declare class AssociateIdentityProviderConfigResponse extends SpeakeasyBase {
    associateIdentityProviderConfigResponse?: shared.AssociateIdentityProviderConfigResponse;
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
