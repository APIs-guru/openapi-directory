import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateSubnetCidrReservationActionEnum {
    CreateSubnetCidrReservation = "CreateSubnetCidrReservation"
}
export declare enum PostCreateSubnetCidrReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateSubnetCidrReservationQueryParams extends SpeakeasyBase {
    action: PostCreateSubnetCidrReservationActionEnum;
    version: PostCreateSubnetCidrReservationVersionEnum;
}
export declare class PostCreateSubnetCidrReservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateSubnetCidrReservationRequest extends SpeakeasyBase {
    queryParams: PostCreateSubnetCidrReservationQueryParams;
    headers: PostCreateSubnetCidrReservationHeaders;
    request?: Uint8Array;
}
export declare class PostCreateSubnetCidrReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
