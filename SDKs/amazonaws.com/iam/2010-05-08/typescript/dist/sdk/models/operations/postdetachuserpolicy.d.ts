import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDetachUserPolicyActionEnum {
    DetachUserPolicy = "DetachUserPolicy"
}
export declare enum PostDetachUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDetachUserPolicyQueryParams extends SpeakeasyBase {
    action: PostDetachUserPolicyActionEnum;
    version: PostDetachUserPolicyVersionEnum;
}
export declare class PostDetachUserPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachUserPolicyRequest extends SpeakeasyBase {
    queryParams: PostDetachUserPolicyQueryParams;
    headers: PostDetachUserPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostDetachUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
