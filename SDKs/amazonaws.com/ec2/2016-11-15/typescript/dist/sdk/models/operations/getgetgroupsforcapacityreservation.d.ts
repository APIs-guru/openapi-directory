import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetGroupsForCapacityReservationActionEnum {
    GetGroupsForCapacityReservation = "GetGroupsForCapacityReservation"
}
export declare enum GetGetGroupsForCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetGroupsForCapacityReservationQueryParams extends SpeakeasyBase {
    action: GetGetGroupsForCapacityReservationActionEnum;
    capacityReservationId: string;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    version: GetGetGroupsForCapacityReservationVersionEnum;
}
export declare class GetGetGroupsForCapacityReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetGroupsForCapacityReservationRequest extends SpeakeasyBase {
    queryParams: GetGetGroupsForCapacityReservationQueryParams;
    headers: GetGetGroupsForCapacityReservationHeaders;
}
export declare class GetGetGroupsForCapacityReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
