import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeCacheParametersActionEnum {
    DescribeCacheParameters = "DescribeCacheParameters"
}
export declare enum GetDescribeCacheParametersVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeCacheParametersQueryParams extends SpeakeasyBase {
    action: GetDescribeCacheParametersActionEnum;
    cacheParameterGroupName: string;
    marker?: string;
    maxRecords?: number;
    source?: string;
    version: GetDescribeCacheParametersVersionEnum;
}
export declare class GetDescribeCacheParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeCacheParametersRequest extends SpeakeasyBase {
    queryParams: GetDescribeCacheParametersQueryParams;
    headers: GetDescribeCacheParametersHeaders;
}
export declare class GetDescribeCacheParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
