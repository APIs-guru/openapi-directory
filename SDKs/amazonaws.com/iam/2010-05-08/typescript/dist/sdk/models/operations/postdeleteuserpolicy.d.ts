import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteUserPolicyActionEnum {
    DeleteUserPolicy = "DeleteUserPolicy"
}
export declare enum PostDeleteUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteUserPolicyQueryParams extends SpeakeasyBase {
    action: PostDeleteUserPolicyActionEnum;
    version: PostDeleteUserPolicyVersionEnum;
}
export declare class PostDeleteUserPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteUserPolicyRequest extends SpeakeasyBase {
    queryParams: PostDeleteUserPolicyQueryParams;
    headers: PostDeleteUserPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
