import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetResetAddressAttributeActionEnum {
    ResetAddressAttribute = "ResetAddressAttribute"
}
export declare enum GetResetAddressAttributeAttributeEnum {
    DomainName = "domain-name"
}
export declare enum GetResetAddressAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetResetAddressAttributeQueryParams extends SpeakeasyBase {
    action: GetResetAddressAttributeActionEnum;
    allocationId: string;
    attribute: GetResetAddressAttributeAttributeEnum;
    dryRun?: boolean;
    version: GetResetAddressAttributeVersionEnum;
}
export declare class GetResetAddressAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResetAddressAttributeRequest extends SpeakeasyBase {
    queryParams: GetResetAddressAttributeQueryParams;
    headers: GetResetAddressAttributeHeaders;
}
export declare class GetResetAddressAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
