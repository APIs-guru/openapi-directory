import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyClientVpnEndpointActionEnum {
    ModifyClientVpnEndpoint = "ModifyClientVpnEndpoint"
}
export declare enum PostModifyClientVpnEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyClientVpnEndpointQueryParams extends SpeakeasyBase {
    action: PostModifyClientVpnEndpointActionEnum;
    version: PostModifyClientVpnEndpointVersionEnum;
}
export declare class PostModifyClientVpnEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyClientVpnEndpointRequest extends SpeakeasyBase {
    queryParams: PostModifyClientVpnEndpointQueryParams;
    headers: PostModifyClientVpnEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostModifyClientVpnEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
