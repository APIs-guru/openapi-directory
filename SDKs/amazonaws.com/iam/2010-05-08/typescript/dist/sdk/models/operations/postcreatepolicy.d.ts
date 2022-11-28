import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreatePolicyActionEnum {
    CreatePolicy = "CreatePolicy"
}
export declare enum PostCreatePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreatePolicyQueryParams extends SpeakeasyBase {
    action: PostCreatePolicyActionEnum;
    version: PostCreatePolicyVersionEnum;
}
export declare class PostCreatePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreatePolicyRequest extends SpeakeasyBase {
    queryParams: PostCreatePolicyQueryParams;
    headers: PostCreatePolicyHeaders;
    request?: Uint8Array;
}
export declare class PostCreatePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
