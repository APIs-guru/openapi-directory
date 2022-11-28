import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PurchaseOfferingXAmzTargetEnum {
    DeviceFarm20150623PurchaseOffering = "DeviceFarm_20150623.PurchaseOffering"
}
export declare class PurchaseOfferingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PurchaseOfferingXAmzTargetEnum;
}
export declare class PurchaseOfferingRequest extends SpeakeasyBase {
    headers: PurchaseOfferingHeaders;
    request: shared.PurchaseOfferingRequest;
}
export declare class PurchaseOfferingResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notEligibleException?: any;
    notFoundException?: any;
    purchaseOfferingResult?: shared.PurchaseOfferingResult;
    serviceAccountException?: any;
    statusCode: number;
}
