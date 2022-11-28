import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeCacheParameterGroupsActionEnum {
    DescribeCacheParameterGroups = "DescribeCacheParameterGroups"
}
export declare enum GetDescribeCacheParameterGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeCacheParameterGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeCacheParameterGroupsActionEnum;
    cacheParameterGroupName?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeCacheParameterGroupsVersionEnum;
}
export declare class GetDescribeCacheParameterGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeCacheParameterGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeCacheParameterGroupsQueryParams;
    headers: GetDescribeCacheParameterGroupsHeaders;
}
export declare class GetDescribeCacheParameterGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
