import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListPolicyVersionsActionEnum {
    ListPolicyVersions = "ListPolicyVersions"
}
export declare enum PostListPolicyVersionsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListPolicyVersionsQueryParams extends SpeakeasyBase {
    action: PostListPolicyVersionsActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListPolicyVersionsVersionEnum;
}
export declare class PostListPolicyVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListPolicyVersionsRequest extends SpeakeasyBase {
    queryParams: PostListPolicyVersionsQueryParams;
    headers: PostListPolicyVersionsHeaders;
    request?: Uint8Array;
}
export declare class PostListPolicyVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
