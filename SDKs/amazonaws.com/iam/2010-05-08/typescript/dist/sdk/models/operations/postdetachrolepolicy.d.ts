import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDetachRolePolicyActionEnum {
    DetachRolePolicy = "DetachRolePolicy"
}
export declare enum PostDetachRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDetachRolePolicyQueryParams extends SpeakeasyBase {
    action: PostDetachRolePolicyActionEnum;
    version: PostDetachRolePolicyVersionEnum;
}
export declare class PostDetachRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachRolePolicyRequest extends SpeakeasyBase {
    queryParams: PostDetachRolePolicyQueryParams;
    headers: PostDetachRolePolicyHeaders;
    request?: Uint8Array;
}
export declare class PostDetachRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
