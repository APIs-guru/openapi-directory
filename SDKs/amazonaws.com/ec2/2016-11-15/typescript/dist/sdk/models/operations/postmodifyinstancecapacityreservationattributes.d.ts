import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyInstanceCapacityReservationAttributesActionEnum {
    ModifyInstanceCapacityReservationAttributes = "ModifyInstanceCapacityReservationAttributes"
}
export declare enum PostModifyInstanceCapacityReservationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyInstanceCapacityReservationAttributesQueryParams extends SpeakeasyBase {
    action: PostModifyInstanceCapacityReservationAttributesActionEnum;
    version: PostModifyInstanceCapacityReservationAttributesVersionEnum;
}
export declare class PostModifyInstanceCapacityReservationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyInstanceCapacityReservationAttributesRequest extends SpeakeasyBase {
    queryParams: PostModifyInstanceCapacityReservationAttributesQueryParams;
    headers: PostModifyInstanceCapacityReservationAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostModifyInstanceCapacityReservationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
