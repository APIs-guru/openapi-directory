import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetAccountPasswordPolicyActionEnum {
    GetAccountPasswordPolicy = "GetAccountPasswordPolicy"
}
export declare enum GetGetAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetAccountPasswordPolicyQueryParams extends SpeakeasyBase {
    action: GetGetAccountPasswordPolicyActionEnum;
    version: GetGetAccountPasswordPolicyVersionEnum;
}
export declare class GetGetAccountPasswordPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetAccountPasswordPolicyRequest extends SpeakeasyBase {
    queryParams: GetGetAccountPasswordPolicyQueryParams;
    headers: GetGetAccountPasswordPolicyHeaders;
}
export declare class GetGetAccountPasswordPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
