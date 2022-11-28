import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisableMetricsCollectionActionEnum {
    DisableMetricsCollection = "DisableMetricsCollection"
}
export declare enum PostDisableMetricsCollectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDisableMetricsCollectionQueryParams extends SpeakeasyBase {
    action: PostDisableMetricsCollectionActionEnum;
    version: PostDisableMetricsCollectionVersionEnum;
}
export declare class PostDisableMetricsCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableMetricsCollectionRequest extends SpeakeasyBase {
    queryParams: PostDisableMetricsCollectionQueryParams;
    headers: PostDisableMetricsCollectionHeaders;
    request?: Uint8Array;
}
export declare class PostDisableMetricsCollectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
