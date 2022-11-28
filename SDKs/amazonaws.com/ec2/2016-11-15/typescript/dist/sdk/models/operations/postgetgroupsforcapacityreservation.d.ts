import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetGroupsForCapacityReservationActionEnum {
    GetGroupsForCapacityReservation = "GetGroupsForCapacityReservation"
}
export declare enum PostGetGroupsForCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetGroupsForCapacityReservationQueryParams extends SpeakeasyBase {
    action: PostGetGroupsForCapacityReservationActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostGetGroupsForCapacityReservationVersionEnum;
}
export declare class PostGetGroupsForCapacityReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetGroupsForCapacityReservationRequest extends SpeakeasyBase {
    queryParams: PostGetGroupsForCapacityReservationQueryParams;
    headers: PostGetGroupsForCapacityReservationHeaders;
    request?: Uint8Array;
}
export declare class PostGetGroupsForCapacityReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
