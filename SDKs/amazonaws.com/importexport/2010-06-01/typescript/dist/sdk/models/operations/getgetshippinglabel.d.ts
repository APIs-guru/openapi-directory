import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetShippingLabelActionEnum {
    GetShippingLabel = "GetShippingLabel"
}
export declare enum GetGetShippingLabelOperationEnum {
    GetShippingLabel = "GetShippingLabel"
}
export declare enum GetGetShippingLabelVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GetGetShippingLabelQueryParams extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GetGetShippingLabelActionEnum;
    operation: GetGetShippingLabelOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GetGetShippingLabelVersionEnum;
    city?: string;
    company?: string;
    country?: string;
    jobIds: string[];
    name?: string;
    phoneNumber?: string;
    postalCode?: string;
    stateOrProvince?: string;
    street1?: string;
    street2?: string;
    street3?: string;
}
export declare class GetGetShippingLabelRequest extends SpeakeasyBase {
    queryParams: GetGetShippingLabelQueryParams;
}
export declare class GetGetShippingLabelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
