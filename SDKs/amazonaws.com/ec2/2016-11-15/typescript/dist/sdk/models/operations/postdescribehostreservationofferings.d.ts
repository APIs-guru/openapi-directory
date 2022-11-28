import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeHostReservationOfferingsActionEnum {
    DescribeHostReservationOfferings = "DescribeHostReservationOfferings"
}
export declare enum PostDescribeHostReservationOfferingsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeHostReservationOfferingsQueryParams extends SpeakeasyBase {
    action: PostDescribeHostReservationOfferingsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeHostReservationOfferingsVersionEnum;
}
export declare class PostDescribeHostReservationOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeHostReservationOfferingsRequest extends SpeakeasyBase {
    queryParams: PostDescribeHostReservationOfferingsQueryParams;
    headers: PostDescribeHostReservationOfferingsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeHostReservationOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
