import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyAddressAttributeActionEnum {
    ModifyAddressAttribute = "ModifyAddressAttribute"
}
export declare enum GetModifyAddressAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyAddressAttributeQueryParams extends SpeakeasyBase {
    action: GetModifyAddressAttributeActionEnum;
    allocationId: string;
    domainName?: string;
    dryRun?: boolean;
    version: GetModifyAddressAttributeVersionEnum;
}
export declare class GetModifyAddressAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyAddressAttributeRequest extends SpeakeasyBase {
    queryParams: GetModifyAddressAttributeQueryParams;
    headers: GetModifyAddressAttributeHeaders;
}
export declare class GetModifyAddressAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
