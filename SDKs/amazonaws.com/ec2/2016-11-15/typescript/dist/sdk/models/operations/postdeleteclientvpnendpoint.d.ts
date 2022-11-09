import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteClientVpnEndpointActionEnum {
    DeleteClientVpnEndpoint = "DeleteClientVpnEndpoint"
}
export declare enum PostDeleteClientVpnEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteClientVpnEndpointQueryParams extends SpeakeasyBase {
    action: PostDeleteClientVpnEndpointActionEnum;
    version: PostDeleteClientVpnEndpointVersionEnum;
}
export declare class PostDeleteClientVpnEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteClientVpnEndpointRequest extends SpeakeasyBase {
    queryParams: PostDeleteClientVpnEndpointQueryParams;
    headers: PostDeleteClientVpnEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteClientVpnEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
