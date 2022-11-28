import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteSubnetCidrReservationActionEnum {
    DeleteSubnetCidrReservation = "DeleteSubnetCidrReservation"
}
export declare enum GetDeleteSubnetCidrReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteSubnetCidrReservationQueryParams extends SpeakeasyBase {
    action: GetDeleteSubnetCidrReservationActionEnum;
    dryRun?: boolean;
    subnetCidrReservationId: string;
    version: GetDeleteSubnetCidrReservationVersionEnum;
}
export declare class GetDeleteSubnetCidrReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSubnetCidrReservationRequest extends SpeakeasyBase {
    queryParams: GetDeleteSubnetCidrReservationQueryParams;
    headers: GetDeleteSubnetCidrReservationHeaders;
}
export declare class GetDeleteSubnetCidrReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
