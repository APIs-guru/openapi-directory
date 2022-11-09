import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeEgressOnlyInternetGatewaysActionEnum {
    DescribeEgressOnlyInternetGateways = "DescribeEgressOnlyInternetGateways"
}
export declare enum PostDescribeEgressOnlyInternetGatewaysVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeEgressOnlyInternetGatewaysQueryParams extends SpeakeasyBase {
    action: PostDescribeEgressOnlyInternetGatewaysActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeEgressOnlyInternetGatewaysVersionEnum;
}
export declare class PostDescribeEgressOnlyInternetGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEgressOnlyInternetGatewaysRequest extends SpeakeasyBase {
    queryParams: PostDescribeEgressOnlyInternetGatewaysQueryParams;
    headers: PostDescribeEgressOnlyInternetGatewaysHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEgressOnlyInternetGatewaysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
