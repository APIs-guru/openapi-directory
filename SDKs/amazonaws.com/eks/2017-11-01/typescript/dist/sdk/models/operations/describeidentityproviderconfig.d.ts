import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeIdentityProviderConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DescribeIdentityProviderConfigHeaders extends SpeakeasyBase {
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
export declare class DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig extends SpeakeasyBase {
    name?: string;
    type?: string;
}
export declare class DescribeIdentityProviderConfigRequestBody extends SpeakeasyBase {
    identityProviderConfig: DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig;
}
export declare class DescribeIdentityProviderConfigRequest extends SpeakeasyBase {
    pathParams: DescribeIdentityProviderConfigPathParams;
    headers: DescribeIdentityProviderConfigHeaders;
    request: DescribeIdentityProviderConfigRequestBody;
}
export declare class DescribeIdentityProviderConfigResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeIdentityProviderConfigResponse?: shared.DescribeIdentityProviderConfigResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
