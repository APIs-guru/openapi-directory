import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetContextKeysForCustomPolicyActionEnum {
    GetContextKeysForCustomPolicy = "GetContextKeysForCustomPolicy"
}
export declare enum GetGetContextKeysForCustomPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetContextKeysForCustomPolicyQueryParams extends SpeakeasyBase {
    action: GetGetContextKeysForCustomPolicyActionEnum;
    policyInputList: string[];
    version: GetGetContextKeysForCustomPolicyVersionEnum;
}
export declare class GetGetContextKeysForCustomPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetContextKeysForCustomPolicyRequest extends SpeakeasyBase {
    queryParams: GetGetContextKeysForCustomPolicyQueryParams;
    headers: GetGetContextKeysForCustomPolicyHeaders;
}
export declare class GetGetContextKeysForCustomPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
