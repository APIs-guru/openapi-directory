import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListPlatformBranchesActionEnum {
    ListPlatformBranches = "ListPlatformBranches"
}
export declare enum PostListPlatformBranchesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListPlatformBranchesQueryParams extends SpeakeasyBase {
    action: PostListPlatformBranchesActionEnum;
    maxRecords?: string;
    nextToken?: string;
    version: PostListPlatformBranchesVersionEnum;
}
export declare class PostListPlatformBranchesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListPlatformBranchesRequest extends SpeakeasyBase {
    queryParams: PostListPlatformBranchesQueryParams;
    headers: PostListPlatformBranchesHeaders;
    request?: Uint8Array;
}
export declare class PostListPlatformBranchesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
