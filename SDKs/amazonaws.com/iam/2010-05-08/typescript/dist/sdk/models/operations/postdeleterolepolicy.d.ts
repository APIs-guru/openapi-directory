import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteRolePolicyActionEnum {
    DeleteRolePolicy = "DeleteRolePolicy"
}
export declare enum PostDeleteRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteRolePolicyQueryParams extends SpeakeasyBase {
    action: PostDeleteRolePolicyActionEnum;
    version: PostDeleteRolePolicyVersionEnum;
}
export declare class PostDeleteRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteRolePolicyRequest extends SpeakeasyBase {
    queryParams: PostDeleteRolePolicyQueryParams;
    headers: PostDeleteRolePolicyHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
