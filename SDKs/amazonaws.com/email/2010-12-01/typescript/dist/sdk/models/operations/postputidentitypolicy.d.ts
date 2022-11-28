import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPutIdentityPolicyActionEnum {
    PutIdentityPolicy = "PutIdentityPolicy"
}
export declare enum PostPutIdentityPolicyVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostPutIdentityPolicyQueryParams extends SpeakeasyBase {
    action: PostPutIdentityPolicyActionEnum;
    version: PostPutIdentityPolicyVersionEnum;
}
export declare class PostPutIdentityPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutIdentityPolicyRequest extends SpeakeasyBase {
    queryParams: PostPutIdentityPolicyQueryParams;
    headers: PostPutIdentityPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostPutIdentityPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
