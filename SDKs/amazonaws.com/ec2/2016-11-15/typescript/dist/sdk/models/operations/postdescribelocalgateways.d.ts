import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeLocalGatewaysActionEnum {
    DescribeLocalGateways = "DescribeLocalGateways"
}
export declare enum PostDescribeLocalGatewaysVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeLocalGatewaysQueryParams extends SpeakeasyBase {
    action: PostDescribeLocalGatewaysActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeLocalGatewaysVersionEnum;
}
export declare class PostDescribeLocalGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLocalGatewaysRequest extends SpeakeasyBase {
    queryParams: PostDescribeLocalGatewaysQueryParams;
    headers: PostDescribeLocalGatewaysHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLocalGatewaysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
