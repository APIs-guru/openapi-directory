import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeVpcClassicLinkDnsSupportActionEnum {
    DescribeVpcClassicLinkDnsSupport = "DescribeVpcClassicLinkDnsSupport"
}
export declare enum GetDescribeVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeVpcClassicLinkDnsSupportQueryParams extends SpeakeasyBase {
    action: GetDescribeVpcClassicLinkDnsSupportActionEnum;
    maxResults?: number;
    nextToken?: string;
    version: GetDescribeVpcClassicLinkDnsSupportVersionEnum;
    vpcIds?: string[];
}
export declare class GetDescribeVpcClassicLinkDnsSupportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
    queryParams: GetDescribeVpcClassicLinkDnsSupportQueryParams;
    headers: GetDescribeVpcClassicLinkDnsSupportHeaders;
}
export declare class GetDescribeVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
