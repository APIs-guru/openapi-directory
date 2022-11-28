import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeCacheClustersActionEnum {
    DescribeCacheClusters = "DescribeCacheClusters"
}
export declare enum PostDescribeCacheClustersVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeCacheClustersQueryParams extends SpeakeasyBase {
    action: PostDescribeCacheClustersActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeCacheClustersVersionEnum;
}
export declare class PostDescribeCacheClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCacheClustersRequest extends SpeakeasyBase {
    queryParams: PostDescribeCacheClustersQueryParams;
    headers: PostDescribeCacheClustersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCacheClustersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
