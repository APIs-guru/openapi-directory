import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyCapacityReservationActionEnum {
    ModifyCapacityReservation = "ModifyCapacityReservation"
}
export declare enum GetModifyCapacityReservationEndDateTypeEnum {
    Unlimited = "unlimited",
    Limited = "limited"
}
export declare enum GetModifyCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyCapacityReservationQueryParams extends SpeakeasyBase {
    accept?: boolean;
    action: GetModifyCapacityReservationActionEnum;
    capacityReservationId: string;
    dryRun?: boolean;
    endDate?: Date;
    endDateType?: GetModifyCapacityReservationEndDateTypeEnum;
    instanceCount?: number;
    version: GetModifyCapacityReservationVersionEnum;
}
export declare class GetModifyCapacityReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyCapacityReservationRequest extends SpeakeasyBase {
    queryParams: GetModifyCapacityReservationQueryParams;
    headers: GetModifyCapacityReservationHeaders;
}
export declare class GetModifyCapacityReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
