import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCancelCapacityReservationActionEnum {
    CancelCapacityReservation = "CancelCapacityReservation"
}
export declare enum GetCancelCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCancelCapacityReservationQueryParams extends SpeakeasyBase {
    action: GetCancelCapacityReservationActionEnum;
    capacityReservationId: string;
    dryRun?: boolean;
    version: GetCancelCapacityReservationVersionEnum;
}
export declare class GetCancelCapacityReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelCapacityReservationRequest extends SpeakeasyBase {
    queryParams: GetCancelCapacityReservationQueryParams;
    headers: GetCancelCapacityReservationHeaders;
}
export declare class GetCancelCapacityReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
