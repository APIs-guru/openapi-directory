import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteAccountPasswordPolicyActionEnum {
    DeleteAccountPasswordPolicy = "DeleteAccountPasswordPolicy"
}
export declare enum PostDeleteAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteAccountPasswordPolicyQueryParams extends SpeakeasyBase {
    action: PostDeleteAccountPasswordPolicyActionEnum;
    version: PostDeleteAccountPasswordPolicyVersionEnum;
}
export declare class PostDeleteAccountPasswordPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteAccountPasswordPolicyRequest extends SpeakeasyBase {
    queryParams: PostDeleteAccountPasswordPolicyQueryParams;
    headers: PostDeleteAccountPasswordPolicyHeaders;
}
export declare class PostDeleteAccountPasswordPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
