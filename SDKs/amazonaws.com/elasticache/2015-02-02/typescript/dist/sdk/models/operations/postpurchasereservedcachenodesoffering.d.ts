import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPurchaseReservedCacheNodesOfferingActionEnum {
    PurchaseReservedCacheNodesOffering = "PurchaseReservedCacheNodesOffering"
}
export declare enum PostPurchaseReservedCacheNodesOfferingVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostPurchaseReservedCacheNodesOfferingQueryParams extends SpeakeasyBase {
    action: PostPurchaseReservedCacheNodesOfferingActionEnum;
    version: PostPurchaseReservedCacheNodesOfferingVersionEnum;
}
export declare class PostPurchaseReservedCacheNodesOfferingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPurchaseReservedCacheNodesOfferingRequest extends SpeakeasyBase {
    queryParams: PostPurchaseReservedCacheNodesOfferingQueryParams;
    headers: PostPurchaseReservedCacheNodesOfferingHeaders;
    request?: Uint8Array;
}
export declare class PostPurchaseReservedCacheNodesOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
