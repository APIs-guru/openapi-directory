import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAttachUserPolicyActionEnum {
    AttachUserPolicy = "AttachUserPolicy"
}
export declare enum PostAttachUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostAttachUserPolicyQueryParams extends SpeakeasyBase {
    action: PostAttachUserPolicyActionEnum;
    version: PostAttachUserPolicyVersionEnum;
}
export declare class PostAttachUserPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachUserPolicyRequest extends SpeakeasyBase {
    queryParams: PostAttachUserPolicyQueryParams;
    headers: PostAttachUserPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostAttachUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
