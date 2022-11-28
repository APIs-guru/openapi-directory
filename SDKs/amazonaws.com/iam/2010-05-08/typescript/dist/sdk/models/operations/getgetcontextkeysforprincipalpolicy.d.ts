import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetContextKeysForPrincipalPolicyActionEnum {
    GetContextKeysForPrincipalPolicy = "GetContextKeysForPrincipalPolicy"
}
export declare enum GetGetContextKeysForPrincipalPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetContextKeysForPrincipalPolicyQueryParams extends SpeakeasyBase {
    action: GetGetContextKeysForPrincipalPolicyActionEnum;
    policyInputList?: string[];
    policySourceArn: string;
    version: GetGetContextKeysForPrincipalPolicyVersionEnum;
}
export declare class GetGetContextKeysForPrincipalPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetContextKeysForPrincipalPolicyRequest extends SpeakeasyBase {
    queryParams: GetGetContextKeysForPrincipalPolicyQueryParams;
    headers: GetGetContextKeysForPrincipalPolicyHeaders;
}
export declare class GetGetContextKeysForPrincipalPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
