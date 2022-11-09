import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutUserPolicyActionEnum {
    PutUserPolicy = "PutUserPolicy"
}
export declare enum PostPutUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostPutUserPolicyQueryParams extends SpeakeasyBase {
    action: PostPutUserPolicyActionEnum;
    version: PostPutUserPolicyVersionEnum;
}
export declare class PostPutUserPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutUserPolicyRequest extends SpeakeasyBase {
    queryParams: PostPutUserPolicyQueryParams;
    headers: PostPutUserPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostPutUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
