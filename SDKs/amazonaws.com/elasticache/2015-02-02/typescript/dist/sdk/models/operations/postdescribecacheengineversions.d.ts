import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeCacheEngineVersionsActionEnum {
    DescribeCacheEngineVersions = "DescribeCacheEngineVersions"
}
export declare enum PostDescribeCacheEngineVersionsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeCacheEngineVersionsQueryParams extends SpeakeasyBase {
    action: PostDescribeCacheEngineVersionsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeCacheEngineVersionsVersionEnum;
}
export declare class PostDescribeCacheEngineVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCacheEngineVersionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeCacheEngineVersionsQueryParams;
    headers: PostDescribeCacheEngineVersionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCacheEngineVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
