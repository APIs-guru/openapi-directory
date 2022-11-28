import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteIdentityPolicyActionEnum {
    DeleteIdentityPolicy = "DeleteIdentityPolicy"
}
export declare enum PostDeleteIdentityPolicyVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteIdentityPolicyQueryParams extends SpeakeasyBase {
    action: PostDeleteIdentityPolicyActionEnum;
    version: PostDeleteIdentityPolicyVersionEnum;
}
export declare class PostDeleteIdentityPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteIdentityPolicyRequest extends SpeakeasyBase {
    queryParams: PostDeleteIdentityPolicyQueryParams;
    headers: PostDeleteIdentityPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteIdentityPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
