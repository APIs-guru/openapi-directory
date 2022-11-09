import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteSubnetCidrReservationActionEnum {
    DeleteSubnetCidrReservation = "DeleteSubnetCidrReservation"
}
export declare enum PostDeleteSubnetCidrReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteSubnetCidrReservationQueryParams extends SpeakeasyBase {
    action: PostDeleteSubnetCidrReservationActionEnum;
    version: PostDeleteSubnetCidrReservationVersionEnum;
}
export declare class PostDeleteSubnetCidrReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSubnetCidrReservationRequest extends SpeakeasyBase {
    queryParams: PostDeleteSubnetCidrReservationQueryParams;
    headers: PostDeleteSubnetCidrReservationHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSubnetCidrReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
