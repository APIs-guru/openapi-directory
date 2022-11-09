import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListIdentityProviderConfigsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ListIdentityProviderConfigsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListIdentityProviderConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListIdentityProviderConfigsRequest extends SpeakeasyBase {
    pathParams: ListIdentityProviderConfigsPathParams;
    queryParams: ListIdentityProviderConfigsQueryParams;
    headers: ListIdentityProviderConfigsHeaders;
}
export declare class ListIdentityProviderConfigsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    listIdentityProviderConfigsResponse?: shared.ListIdentityProviderConfigsResponse;
    resourceNotFoundException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
