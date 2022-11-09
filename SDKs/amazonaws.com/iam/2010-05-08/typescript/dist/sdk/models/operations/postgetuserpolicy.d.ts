import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetUserPolicyActionEnum {
    GetUserPolicy = "GetUserPolicy"
}
export declare enum PostGetUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetUserPolicyQueryParams extends SpeakeasyBase {
    action: PostGetUserPolicyActionEnum;
    version: PostGetUserPolicyVersionEnum;
}
export declare class PostGetUserPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetUserPolicyRequest extends SpeakeasyBase {
    queryParams: PostGetUserPolicyQueryParams;
    headers: PostGetUserPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostGetUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
