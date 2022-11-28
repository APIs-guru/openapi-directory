import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetRolePolicyActionEnum {
    GetRolePolicy = "GetRolePolicy"
}
export declare enum PostGetRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetRolePolicyQueryParams extends SpeakeasyBase {
    action: PostGetRolePolicyActionEnum;
    version: PostGetRolePolicyVersionEnum;
}
export declare class PostGetRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetRolePolicyRequest extends SpeakeasyBase {
    queryParams: PostGetRolePolicyQueryParams;
    headers: PostGetRolePolicyHeaders;
    request?: Uint8Array;
}
export declare class PostGetRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
