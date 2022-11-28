import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeCacheEngineVersionsActionEnum {
    DescribeCacheEngineVersions = "DescribeCacheEngineVersions"
}
export declare enum GetDescribeCacheEngineVersionsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeCacheEngineVersionsQueryParams extends SpeakeasyBase {
    action: GetDescribeCacheEngineVersionsActionEnum;
    cacheParameterGroupFamily?: string;
    defaultOnly?: boolean;
    engine?: string;
    engineVersion?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeCacheEngineVersionsVersionEnum;
}
export declare class GetDescribeCacheEngineVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeCacheEngineVersionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeCacheEngineVersionsQueryParams;
    headers: GetDescribeCacheEngineVersionsHeaders;
}
export declare class GetDescribeCacheEngineVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
