import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeReservedInstancesListingsActionEnum {
    DescribeReservedInstancesListings = "DescribeReservedInstancesListings"
}
export declare enum PostDescribeReservedInstancesListingsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeReservedInstancesListingsQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedInstancesListingsActionEnum;
    version: PostDescribeReservedInstancesListingsVersionEnum;
}
export declare class PostDescribeReservedInstancesListingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReservedInstancesListingsRequest extends SpeakeasyBase {
    queryParams: PostDescribeReservedInstancesListingsQueryParams;
    headers: PostDescribeReservedInstancesListingsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReservedInstancesListingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
