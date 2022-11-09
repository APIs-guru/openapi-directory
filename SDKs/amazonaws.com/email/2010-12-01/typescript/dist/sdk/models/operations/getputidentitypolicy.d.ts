import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetPutIdentityPolicyActionEnum {
    PutIdentityPolicy = "PutIdentityPolicy"
}
export declare enum GetPutIdentityPolicyVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetPutIdentityPolicyQueryParams extends SpeakeasyBase {
    action: GetPutIdentityPolicyActionEnum;
    identity: string;
    policy: string;
    policyName: string;
    version: GetPutIdentityPolicyVersionEnum;
}
export declare class GetPutIdentityPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutIdentityPolicyRequest extends SpeakeasyBase {
    queryParams: GetPutIdentityPolicyQueryParams;
    headers: GetPutIdentityPolicyHeaders;
}
export declare class GetPutIdentityPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
