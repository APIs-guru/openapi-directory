import { SpeakeasyBase } from "../../../internal/utils";
export declare class PurchaseProvisionedCapacityPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class PurchaseProvisionedCapacityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PurchaseProvisionedCapacityRequest extends SpeakeasyBase {
    pathParams: PurchaseProvisionedCapacityPathParams;
    headers: PurchaseProvisionedCapacityHeaders;
}
export declare class PurchaseProvisionedCapacityResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    limitExceededException?: any;
    missingParameterValueException?: any;
    purchaseProvisionedCapacityOutput?: Map<string, any>;
    serviceUnavailableException?: any;
    statusCode: number;
}
