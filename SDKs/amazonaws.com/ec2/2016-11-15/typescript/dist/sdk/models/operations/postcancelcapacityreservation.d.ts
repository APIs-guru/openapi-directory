import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCancelCapacityReservationActionEnum {
    CancelCapacityReservation = "CancelCapacityReservation"
}
export declare enum PostCancelCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCancelCapacityReservationQueryParams extends SpeakeasyBase {
    action: PostCancelCapacityReservationActionEnum;
    version: PostCancelCapacityReservationVersionEnum;
}
export declare class PostCancelCapacityReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCancelCapacityReservationRequest extends SpeakeasyBase {
    queryParams: PostCancelCapacityReservationQueryParams;
    headers: PostCancelCapacityReservationHeaders;
    request?: Uint8Array;
}
export declare class PostCancelCapacityReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
