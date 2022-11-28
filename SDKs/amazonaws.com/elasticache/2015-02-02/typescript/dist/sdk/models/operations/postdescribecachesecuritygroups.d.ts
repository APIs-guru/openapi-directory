import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeCacheSecurityGroupsActionEnum {
    DescribeCacheSecurityGroups = "DescribeCacheSecurityGroups"
}
export declare enum PostDescribeCacheSecurityGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeCacheSecurityGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeCacheSecurityGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeCacheSecurityGroupsVersionEnum;
}
export declare class PostDescribeCacheSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCacheSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeCacheSecurityGroupsQueryParams;
    headers: PostDescribeCacheSecurityGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCacheSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
