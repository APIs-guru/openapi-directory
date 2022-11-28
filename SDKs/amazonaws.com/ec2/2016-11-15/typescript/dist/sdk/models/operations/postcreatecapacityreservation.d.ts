import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateCapacityReservationActionEnum {
    CreateCapacityReservation = "CreateCapacityReservation"
}
export declare enum PostCreateCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateCapacityReservationQueryParams extends SpeakeasyBase {
    action: PostCreateCapacityReservationActionEnum;
    version: PostCreateCapacityReservationVersionEnum;
}
export declare class PostCreateCapacityReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateCapacityReservationRequest extends SpeakeasyBase {
    queryParams: PostCreateCapacityReservationQueryParams;
    headers: PostCreateCapacityReservationHeaders;
    request?: Uint8Array;
}
export declare class PostCreateCapacityReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
