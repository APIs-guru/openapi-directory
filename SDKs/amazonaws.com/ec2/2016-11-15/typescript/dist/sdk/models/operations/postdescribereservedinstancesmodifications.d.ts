import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeReservedInstancesModificationsActionEnum {
    DescribeReservedInstancesModifications = "DescribeReservedInstancesModifications"
}
export declare enum PostDescribeReservedInstancesModificationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeReservedInstancesModificationsQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedInstancesModificationsActionEnum;
    nextToken?: string;
    version: PostDescribeReservedInstancesModificationsVersionEnum;
}
export declare class PostDescribeReservedInstancesModificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReservedInstancesModificationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeReservedInstancesModificationsQueryParams;
    headers: PostDescribeReservedInstancesModificationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReservedInstancesModificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
