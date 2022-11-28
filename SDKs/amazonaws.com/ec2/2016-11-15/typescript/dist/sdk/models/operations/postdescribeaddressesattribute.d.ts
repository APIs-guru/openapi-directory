import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeAddressesAttributeActionEnum {
    DescribeAddressesAttribute = "DescribeAddressesAttribute"
}
export declare enum PostDescribeAddressesAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeAddressesAttributeQueryParams extends SpeakeasyBase {
    action: PostDescribeAddressesAttributeActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeAddressesAttributeVersionEnum;
}
export declare class PostDescribeAddressesAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAddressesAttributeRequest extends SpeakeasyBase {
    queryParams: PostDescribeAddressesAttributeQueryParams;
    headers: PostDescribeAddressesAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAddressesAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
