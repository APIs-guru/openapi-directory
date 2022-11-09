import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAttachRolePolicyActionEnum {
    AttachRolePolicy = "AttachRolePolicy"
}
export declare enum PostAttachRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostAttachRolePolicyQueryParams extends SpeakeasyBase {
    action: PostAttachRolePolicyActionEnum;
    version: PostAttachRolePolicyVersionEnum;
}
export declare class PostAttachRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachRolePolicyRequest extends SpeakeasyBase {
    queryParams: PostAttachRolePolicyQueryParams;
    headers: PostAttachRolePolicyHeaders;
    request?: Uint8Array;
}
export declare class PostAttachRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
