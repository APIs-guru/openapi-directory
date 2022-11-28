import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeMovingAddressesActionEnum {
    DescribeMovingAddresses = "DescribeMovingAddresses"
}
export declare enum PostDescribeMovingAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeMovingAddressesQueryParams extends SpeakeasyBase {
    action: PostDescribeMovingAddressesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeMovingAddressesVersionEnum;
}
export declare class PostDescribeMovingAddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeMovingAddressesRequest extends SpeakeasyBase {
    queryParams: PostDescribeMovingAddressesQueryParams;
    headers: PostDescribeMovingAddressesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeMovingAddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
