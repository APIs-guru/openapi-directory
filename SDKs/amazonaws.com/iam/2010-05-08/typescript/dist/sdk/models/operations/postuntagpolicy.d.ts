import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUntagPolicyActionEnum {
    UntagPolicy = "UntagPolicy"
}
export declare enum PostUntagPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUntagPolicyQueryParams extends SpeakeasyBase {
    action: PostUntagPolicyActionEnum;
    version: PostUntagPolicyVersionEnum;
}
export declare class PostUntagPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUntagPolicyRequest extends SpeakeasyBase {
    queryParams: PostUntagPolicyQueryParams;
    headers: PostUntagPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostUntagPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
