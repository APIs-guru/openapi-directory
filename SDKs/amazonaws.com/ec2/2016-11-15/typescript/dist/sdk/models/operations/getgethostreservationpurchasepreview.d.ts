import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetHostReservationPurchasePreviewActionEnum {
    GetHostReservationPurchasePreview = "GetHostReservationPurchasePreview"
}
export declare enum GetGetHostReservationPurchasePreviewVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetHostReservationPurchasePreviewQueryParams extends SpeakeasyBase {
    action: GetGetHostReservationPurchasePreviewActionEnum;
    hostIdSet: string[];
    offeringId: string;
    version: GetGetHostReservationPurchasePreviewVersionEnum;
}
export declare class GetGetHostReservationPurchasePreviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetHostReservationPurchasePreviewRequest extends SpeakeasyBase {
    queryParams: GetGetHostReservationPurchasePreviewQueryParams;
    headers: GetGetHostReservationPurchasePreviewHeaders;
}
export declare class GetGetHostReservationPurchasePreviewResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
