import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeCacheSecurityGroupsActionEnum {
    DescribeCacheSecurityGroups = "DescribeCacheSecurityGroups"
}
export declare enum GetDescribeCacheSecurityGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeCacheSecurityGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeCacheSecurityGroupsActionEnum;
    cacheSecurityGroupName?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeCacheSecurityGroupsVersionEnum;
}
export declare class GetDescribeCacheSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeCacheSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeCacheSecurityGroupsQueryParams;
    headers: GetDescribeCacheSecurityGroupsHeaders;
}
export declare class GetDescribeCacheSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
