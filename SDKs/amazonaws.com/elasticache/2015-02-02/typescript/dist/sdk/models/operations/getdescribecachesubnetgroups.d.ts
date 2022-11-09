import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeCacheSubnetGroupsActionEnum {
    DescribeCacheSubnetGroups = "DescribeCacheSubnetGroups"
}
export declare enum GetDescribeCacheSubnetGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeCacheSubnetGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeCacheSubnetGroupsActionEnum;
    cacheSubnetGroupName?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeCacheSubnetGroupsVersionEnum;
}
export declare class GetDescribeCacheSubnetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeCacheSubnetGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeCacheSubnetGroupsQueryParams;
    headers: GetDescribeCacheSubnetGroupsHeaders;
}
export declare class GetDescribeCacheSubnetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
