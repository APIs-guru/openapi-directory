import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListRolePoliciesActionEnum {
    ListRolePolicies = "ListRolePolicies"
}
export declare enum PostListRolePoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListRolePoliciesQueryParams extends SpeakeasyBase {
    action: PostListRolePoliciesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListRolePoliciesVersionEnum;
}
export declare class PostListRolePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListRolePoliciesRequest extends SpeakeasyBase {
    queryParams: PostListRolePoliciesQueryParams;
    headers: PostListRolePoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostListRolePoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
