import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetAccountPasswordPolicyActionEnum {
    GetAccountPasswordPolicy = "GetAccountPasswordPolicy"
}
export declare enum PostGetAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetAccountPasswordPolicyQueryParams extends SpeakeasyBase {
    action: PostGetAccountPasswordPolicyActionEnum;
    version: PostGetAccountPasswordPolicyVersionEnum;
}
export declare class PostGetAccountPasswordPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetAccountPasswordPolicyRequest extends SpeakeasyBase {
    queryParams: PostGetAccountPasswordPolicyQueryParams;
    headers: PostGetAccountPasswordPolicyHeaders;
}
export declare class PostGetAccountPasswordPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
