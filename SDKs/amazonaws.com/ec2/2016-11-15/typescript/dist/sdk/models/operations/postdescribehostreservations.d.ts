import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeHostReservationsActionEnum {
    DescribeHostReservations = "DescribeHostReservations"
}
export declare enum PostDescribeHostReservationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeHostReservationsQueryParams extends SpeakeasyBase {
    action: PostDescribeHostReservationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeHostReservationsVersionEnum;
}
export declare class PostDescribeHostReservationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeHostReservationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeHostReservationsQueryParams;
    headers: PostDescribeHostReservationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeHostReservationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
