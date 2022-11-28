import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeCacheParametersActionEnum {
    DescribeCacheParameters = "DescribeCacheParameters"
}
export declare enum PostDescribeCacheParametersVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeCacheParametersQueryParams extends SpeakeasyBase {
    action: PostDescribeCacheParametersActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeCacheParametersVersionEnum;
}
export declare class PostDescribeCacheParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCacheParametersRequest extends SpeakeasyBase {
    queryParams: PostDescribeCacheParametersQueryParams;
    headers: PostDescribeCacheParametersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCacheParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
