import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetSubnetCidrReservationsActionEnum {
    GetSubnetCidrReservations = "GetSubnetCidrReservations"
}
export declare enum PostGetSubnetCidrReservationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetSubnetCidrReservationsQueryParams extends SpeakeasyBase {
    action: PostGetSubnetCidrReservationsActionEnum;
    version: PostGetSubnetCidrReservationsVersionEnum;
}
export declare class PostGetSubnetCidrReservationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetSubnetCidrReservationsRequest extends SpeakeasyBase {
    queryParams: PostGetSubnetCidrReservationsQueryParams;
    headers: PostGetSubnetCidrReservationsHeaders;
    request?: Uint8Array;
}
export declare class PostGetSubnetCidrReservationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
