import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetPurchaseReservedInstancesOfferingActionEnum {
    PurchaseReservedInstancesOffering = "PurchaseReservedInstancesOffering"
}
/**
 * Describes the limit price of a Reserved Instance offering.
**/
export declare class GetPurchaseReservedInstancesOfferingLimitPrice extends SpeakeasyBase {
    amount?: number;
    currencyCode?: shared.CurrencyCodeValuesEnum;
}
export declare enum GetPurchaseReservedInstancesOfferingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetPurchaseReservedInstancesOfferingQueryParams extends SpeakeasyBase {
    action: GetPurchaseReservedInstancesOfferingActionEnum;
    dryRun?: boolean;
    instanceCount: number;
    limitPrice?: GetPurchaseReservedInstancesOfferingLimitPrice;
    purchaseTime?: Date;
    reservedInstancesOfferingId: string;
    version: GetPurchaseReservedInstancesOfferingVersionEnum;
}
export declare class GetPurchaseReservedInstancesOfferingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPurchaseReservedInstancesOfferingRequest extends SpeakeasyBase {
    queryParams: GetPurchaseReservedInstancesOfferingQueryParams;
    headers: GetPurchaseReservedInstancesOfferingHeaders;
}
export declare class GetPurchaseReservedInstancesOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
