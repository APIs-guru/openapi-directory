import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteIdentityPolicyActionEnum {
    DeleteIdentityPolicy = "DeleteIdentityPolicy"
}
export declare enum GetDeleteIdentityPolicyVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteIdentityPolicyQueryParams extends SpeakeasyBase {
    action: GetDeleteIdentityPolicyActionEnum;
    identity: string;
    policyName: string;
    version: GetDeleteIdentityPolicyVersionEnum;
}
export declare class GetDeleteIdentityPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteIdentityPolicyRequest extends SpeakeasyBase {
    queryParams: GetDeleteIdentityPolicyQueryParams;
    headers: GetDeleteIdentityPolicyHeaders;
}
export declare class GetDeleteIdentityPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
