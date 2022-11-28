import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeCapacityReservationsActionEnum {
    DescribeCapacityReservations = "DescribeCapacityReservations"
}
export declare enum PostDescribeCapacityReservationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeCapacityReservationsQueryParams extends SpeakeasyBase {
    action: PostDescribeCapacityReservationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeCapacityReservationsVersionEnum;
}
export declare class PostDescribeCapacityReservationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCapacityReservationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeCapacityReservationsQueryParams;
    headers: PostDescribeCapacityReservationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCapacityReservationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
