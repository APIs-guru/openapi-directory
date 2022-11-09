import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostEnableMetricsCollectionActionEnum {
    EnableMetricsCollection = "EnableMetricsCollection"
}
export declare enum PostEnableMetricsCollectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostEnableMetricsCollectionQueryParams extends SpeakeasyBase {
    action: PostEnableMetricsCollectionActionEnum;
    version: PostEnableMetricsCollectionVersionEnum;
}
export declare class PostEnableMetricsCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableMetricsCollectionRequest extends SpeakeasyBase {
    queryParams: PostEnableMetricsCollectionQueryParams;
    headers: PostEnableMetricsCollectionHeaders;
    request?: Uint8Array;
}
export declare class PostEnableMetricsCollectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
