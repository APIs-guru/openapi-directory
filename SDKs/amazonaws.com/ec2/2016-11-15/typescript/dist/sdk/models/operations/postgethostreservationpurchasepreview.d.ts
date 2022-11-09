import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetHostReservationPurchasePreviewActionEnum {
    GetHostReservationPurchasePreview = "GetHostReservationPurchasePreview"
}
export declare enum PostGetHostReservationPurchasePreviewVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetHostReservationPurchasePreviewQueryParams extends SpeakeasyBase {
    action: PostGetHostReservationPurchasePreviewActionEnum;
    version: PostGetHostReservationPurchasePreviewVersionEnum;
}
export declare class PostGetHostReservationPurchasePreviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetHostReservationPurchasePreviewRequest extends SpeakeasyBase {
    queryParams: PostGetHostReservationPurchasePreviewQueryParams;
    headers: PostGetHostReservationPurchasePreviewHeaders;
    request?: Uint8Array;
}
export declare class PostGetHostReservationPurchasePreviewResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
