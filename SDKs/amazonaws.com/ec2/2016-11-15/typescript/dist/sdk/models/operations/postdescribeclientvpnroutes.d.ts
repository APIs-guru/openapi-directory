import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeClientVpnRoutesActionEnum {
    DescribeClientVpnRoutes = "DescribeClientVpnRoutes"
}
export declare enum PostDescribeClientVpnRoutesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeClientVpnRoutesQueryParams extends SpeakeasyBase {
    action: PostDescribeClientVpnRoutesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeClientVpnRoutesVersionEnum;
}
export declare class PostDescribeClientVpnRoutesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClientVpnRoutesRequest extends SpeakeasyBase {
    queryParams: PostDescribeClientVpnRoutesQueryParams;
    headers: PostDescribeClientVpnRoutesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClientVpnRoutesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
