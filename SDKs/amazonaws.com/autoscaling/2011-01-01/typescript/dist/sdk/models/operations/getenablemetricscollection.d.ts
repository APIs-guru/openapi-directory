import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEnableMetricsCollectionActionEnum {
    EnableMetricsCollection = "EnableMetricsCollection"
}
export declare enum GetEnableMetricsCollectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetEnableMetricsCollectionQueryParams extends SpeakeasyBase {
    action: GetEnableMetricsCollectionActionEnum;
    autoScalingGroupName: string;
    granularity: string;
    metrics?: string[];
    version: GetEnableMetricsCollectionVersionEnum;
}
export declare class GetEnableMetricsCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableMetricsCollectionRequest extends SpeakeasyBase {
    queryParams: GetEnableMetricsCollectionQueryParams;
    headers: GetEnableMetricsCollectionHeaders;
}
export declare class GetEnableMetricsCollectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
