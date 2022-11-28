import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyCapacityReservationActionEnum {
    ModifyCapacityReservation = "ModifyCapacityReservation"
}
export declare enum PostModifyCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyCapacityReservationQueryParams extends SpeakeasyBase {
    action: PostModifyCapacityReservationActionEnum;
    version: PostModifyCapacityReservationVersionEnum;
}
export declare class PostModifyCapacityReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyCapacityReservationRequest extends SpeakeasyBase {
    queryParams: PostModifyCapacityReservationQueryParams;
    headers: PostModifyCapacityReservationHeaders;
    request?: Uint8Array;
}
export declare class PostModifyCapacityReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
