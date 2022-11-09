import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeReservedInstancesActionEnum {
    DescribeReservedInstances = "DescribeReservedInstances"
}
export declare enum PostDescribeReservedInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeReservedInstancesQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedInstancesActionEnum;
    version: PostDescribeReservedInstancesVersionEnum;
}
export declare class PostDescribeReservedInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReservedInstancesRequest extends SpeakeasyBase {
    queryParams: PostDescribeReservedInstancesQueryParams;
    headers: PostDescribeReservedInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReservedInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
