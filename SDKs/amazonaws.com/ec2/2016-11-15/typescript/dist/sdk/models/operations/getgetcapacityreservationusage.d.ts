import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetCapacityReservationUsageActionEnum {
    GetCapacityReservationUsage = "GetCapacityReservationUsage"
}
export declare enum GetGetCapacityReservationUsageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetCapacityReservationUsageQueryParams extends SpeakeasyBase {
    action: GetGetCapacityReservationUsageActionEnum;
    capacityReservationId: string;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    version: GetGetCapacityReservationUsageVersionEnum;
}
export declare class GetGetCapacityReservationUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetCapacityReservationUsageRequest extends SpeakeasyBase {
    queryParams: GetGetCapacityReservationUsageQueryParams;
    headers: GetGetCapacityReservationUsageHeaders;
}
export declare class GetGetCapacityReservationUsageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
