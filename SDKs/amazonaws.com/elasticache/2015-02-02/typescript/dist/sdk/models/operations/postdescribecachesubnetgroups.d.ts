import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeCacheSubnetGroupsActionEnum {
    DescribeCacheSubnetGroups = "DescribeCacheSubnetGroups"
}
export declare enum PostDescribeCacheSubnetGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeCacheSubnetGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeCacheSubnetGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeCacheSubnetGroupsVersionEnum;
}
export declare class PostDescribeCacheSubnetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCacheSubnetGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeCacheSubnetGroupsQueryParams;
    headers: PostDescribeCacheSubnetGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCacheSubnetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
