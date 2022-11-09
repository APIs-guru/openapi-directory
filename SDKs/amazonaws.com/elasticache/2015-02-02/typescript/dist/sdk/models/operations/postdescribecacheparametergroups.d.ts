import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeCacheParameterGroupsActionEnum {
    DescribeCacheParameterGroups = "DescribeCacheParameterGroups"
}
export declare enum PostDescribeCacheParameterGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeCacheParameterGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeCacheParameterGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeCacheParameterGroupsVersionEnum;
}
export declare class PostDescribeCacheParameterGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCacheParameterGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeCacheParameterGroupsQueryParams;
    headers: PostDescribeCacheParameterGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCacheParameterGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
