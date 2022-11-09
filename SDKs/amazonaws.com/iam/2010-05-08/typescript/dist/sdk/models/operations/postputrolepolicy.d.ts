import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutRolePolicyActionEnum {
    PutRolePolicy = "PutRolePolicy"
}
export declare enum PostPutRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostPutRolePolicyQueryParams extends SpeakeasyBase {
    action: PostPutRolePolicyActionEnum;
    version: PostPutRolePolicyVersionEnum;
}
export declare class PostPutRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutRolePolicyRequest extends SpeakeasyBase {
    queryParams: PostPutRolePolicyQueryParams;
    headers: PostPutRolePolicyHeaders;
    request?: Uint8Array;
}
export declare class PostPutRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
