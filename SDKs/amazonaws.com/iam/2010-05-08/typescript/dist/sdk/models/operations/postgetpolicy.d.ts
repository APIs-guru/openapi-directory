import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetPolicyActionEnum {
    GetPolicy = "GetPolicy"
}
export declare enum PostGetPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetPolicyQueryParams extends SpeakeasyBase {
    action: PostGetPolicyActionEnum;
    version: PostGetPolicyVersionEnum;
}
export declare class PostGetPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetPolicyRequest extends SpeakeasyBase {
    queryParams: PostGetPolicyQueryParams;
    headers: PostGetPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostGetPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
