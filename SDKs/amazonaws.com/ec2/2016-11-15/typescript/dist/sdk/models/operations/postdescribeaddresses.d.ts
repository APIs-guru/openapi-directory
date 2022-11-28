import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeAddressesActionEnum {
    DescribeAddresses = "DescribeAddresses"
}
export declare enum PostDescribeAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeAddressesQueryParams extends SpeakeasyBase {
    action: PostDescribeAddressesActionEnum;
    version: PostDescribeAddressesVersionEnum;
}
export declare class PostDescribeAddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAddressesRequest extends SpeakeasyBase {
    queryParams: PostDescribeAddressesQueryParams;
    headers: PostDescribeAddressesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
