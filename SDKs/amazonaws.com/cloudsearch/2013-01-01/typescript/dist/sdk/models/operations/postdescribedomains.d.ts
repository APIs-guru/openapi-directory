import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDomainsActionEnum {
    DescribeDomains = "DescribeDomains"
}
export declare enum PostDescribeDomainsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDescribeDomainsQueryParams extends SpeakeasyBase {
    action: PostDescribeDomainsActionEnum;
    version: PostDescribeDomainsVersionEnum;
}
export declare class PostDescribeDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDomainsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDomainsQueryParams;
    headers: PostDescribeDomainsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
