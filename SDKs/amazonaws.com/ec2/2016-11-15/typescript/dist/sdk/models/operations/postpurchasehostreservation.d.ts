import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPurchaseHostReservationActionEnum {
    PurchaseHostReservation = "PurchaseHostReservation"
}
export declare enum PostPurchaseHostReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostPurchaseHostReservationQueryParams extends SpeakeasyBase {
    action: PostPurchaseHostReservationActionEnum;
    version: PostPurchaseHostReservationVersionEnum;
}
export declare class PostPurchaseHostReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPurchaseHostReservationRequest extends SpeakeasyBase {
    queryParams: PostPurchaseHostReservationQueryParams;
    headers: PostPurchaseHostReservationHeaders;
    request?: Uint8Array;
}
export declare class PostPurchaseHostReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
