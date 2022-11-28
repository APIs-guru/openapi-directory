import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListPlatformVersionsActionEnum {
    ListPlatformVersions = "ListPlatformVersions"
}
export declare enum PostListPlatformVersionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListPlatformVersionsQueryParams extends SpeakeasyBase {
    action: PostListPlatformVersionsActionEnum;
    maxRecords?: string;
    nextToken?: string;
    version: PostListPlatformVersionsVersionEnum;
}
export declare class PostListPlatformVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListPlatformVersionsRequest extends SpeakeasyBase {
    queryParams: PostListPlatformVersionsQueryParams;
    headers: PostListPlatformVersionsHeaders;
    request?: Uint8Array;
}
export declare class PostListPlatformVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
