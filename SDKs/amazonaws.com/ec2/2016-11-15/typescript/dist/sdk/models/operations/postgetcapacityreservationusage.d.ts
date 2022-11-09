import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetCapacityReservationUsageActionEnum {
    GetCapacityReservationUsage = "GetCapacityReservationUsage"
}
export declare enum PostGetCapacityReservationUsageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetCapacityReservationUsageQueryParams extends SpeakeasyBase {
    action: PostGetCapacityReservationUsageActionEnum;
    version: PostGetCapacityReservationUsageVersionEnum;
}
export declare class PostGetCapacityReservationUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetCapacityReservationUsageRequest extends SpeakeasyBase {
    queryParams: PostGetCapacityReservationUsageQueryParams;
    headers: PostGetCapacityReservationUsageHeaders;
    request?: Uint8Array;
}
export declare class PostGetCapacityReservationUsageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
