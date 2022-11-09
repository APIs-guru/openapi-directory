import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPurchaseReservedInstancesOfferingActionEnum {
    PurchaseReservedInstancesOffering = "PurchaseReservedInstancesOffering"
}
export declare enum PostPurchaseReservedInstancesOfferingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostPurchaseReservedInstancesOfferingQueryParams extends SpeakeasyBase {
    action: PostPurchaseReservedInstancesOfferingActionEnum;
    version: PostPurchaseReservedInstancesOfferingVersionEnum;
}
export declare class PostPurchaseReservedInstancesOfferingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPurchaseReservedInstancesOfferingRequest extends SpeakeasyBase {
    queryParams: PostPurchaseReservedInstancesOfferingQueryParams;
    headers: PostPurchaseReservedInstancesOfferingHeaders;
    request?: Uint8Array;
}
export declare class PostPurchaseReservedInstancesOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
