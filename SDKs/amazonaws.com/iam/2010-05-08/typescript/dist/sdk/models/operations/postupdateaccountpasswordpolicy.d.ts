import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateAccountPasswordPolicyActionEnum {
    UpdateAccountPasswordPolicy = "UpdateAccountPasswordPolicy"
}
export declare enum PostUpdateAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateAccountPasswordPolicyQueryParams extends SpeakeasyBase {
    action: PostUpdateAccountPasswordPolicyActionEnum;
    version: PostUpdateAccountPasswordPolicyVersionEnum;
}
export declare class PostUpdateAccountPasswordPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateAccountPasswordPolicyRequest extends SpeakeasyBase {
    queryParams: PostUpdateAccountPasswordPolicyQueryParams;
    headers: PostUpdateAccountPasswordPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateAccountPasswordPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
