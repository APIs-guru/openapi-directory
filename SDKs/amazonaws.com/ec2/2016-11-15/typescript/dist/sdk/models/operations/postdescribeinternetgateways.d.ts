import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeInternetGatewaysActionEnum {
    DescribeInternetGateways = "DescribeInternetGateways"
}
export declare enum PostDescribeInternetGatewaysVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeInternetGatewaysQueryParams extends SpeakeasyBase {
    action: PostDescribeInternetGatewaysActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeInternetGatewaysVersionEnum;
}
export declare class PostDescribeInternetGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInternetGatewaysRequest extends SpeakeasyBase {
    queryParams: PostDescribeInternetGatewaysQueryParams;
    headers: PostDescribeInternetGatewaysHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInternetGatewaysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
