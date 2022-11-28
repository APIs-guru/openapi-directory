import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteAccountPasswordPolicyActionEnum {
    DeleteAccountPasswordPolicy = "DeleteAccountPasswordPolicy"
}
export declare enum GetDeleteAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteAccountPasswordPolicyQueryParams extends SpeakeasyBase {
    action: GetDeleteAccountPasswordPolicyActionEnum;
    version: GetDeleteAccountPasswordPolicyVersionEnum;
}
export declare class GetDeleteAccountPasswordPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteAccountPasswordPolicyRequest extends SpeakeasyBase {
    queryParams: GetDeleteAccountPasswordPolicyQueryParams;
    headers: GetDeleteAccountPasswordPolicyHeaders;
}
export declare class GetDeleteAccountPasswordPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
