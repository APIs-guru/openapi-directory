import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateClientVpnEndpointActionEnum {
    CreateClientVpnEndpoint = "CreateClientVpnEndpoint"
}
export declare enum PostCreateClientVpnEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateClientVpnEndpointQueryParams extends SpeakeasyBase {
    action: PostCreateClientVpnEndpointActionEnum;
    version: PostCreateClientVpnEndpointVersionEnum;
}
export declare class PostCreateClientVpnEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateClientVpnEndpointRequest extends SpeakeasyBase {
    queryParams: PostCreateClientVpnEndpointQueryParams;
    headers: PostCreateClientVpnEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostCreateClientVpnEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
