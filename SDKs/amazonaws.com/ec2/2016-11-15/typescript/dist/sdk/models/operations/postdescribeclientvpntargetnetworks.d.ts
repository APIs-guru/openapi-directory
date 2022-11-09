import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeClientVpnTargetNetworksActionEnum {
    DescribeClientVpnTargetNetworks = "DescribeClientVpnTargetNetworks"
}
export declare enum PostDescribeClientVpnTargetNetworksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeClientVpnTargetNetworksQueryParams extends SpeakeasyBase {
    action: PostDescribeClientVpnTargetNetworksActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeClientVpnTargetNetworksVersionEnum;
}
export declare class PostDescribeClientVpnTargetNetworksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClientVpnTargetNetworksRequest extends SpeakeasyBase {
    queryParams: PostDescribeClientVpnTargetNetworksQueryParams;
    headers: PostDescribeClientVpnTargetNetworksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClientVpnTargetNetworksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
