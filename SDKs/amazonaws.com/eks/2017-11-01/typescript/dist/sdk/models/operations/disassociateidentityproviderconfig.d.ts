import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DisassociateIdentityProviderConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DisassociateIdentityProviderConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object representing an identity provider configuration.
**/
export declare class DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig extends SpeakeasyBase {
    name?: string;
    type?: string;
}
export declare class DisassociateIdentityProviderConfigRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    identityProviderConfig: DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig;
}
export declare class DisassociateIdentityProviderConfigRequest extends SpeakeasyBase {
    pathParams: DisassociateIdentityProviderConfigPathParams;
    headers: DisassociateIdentityProviderConfigHeaders;
    request: DisassociateIdentityProviderConfigRequestBody;
}
export declare class DisassociateIdentityProviderConfigResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    disassociateIdentityProviderConfigResponse?: shared.DisassociateIdentityProviderConfigResponse;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
