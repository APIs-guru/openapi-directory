import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisableMetricsCollectionActionEnum {
    DisableMetricsCollection = "DisableMetricsCollection"
}
export declare enum GetDisableMetricsCollectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDisableMetricsCollectionQueryParams extends SpeakeasyBase {
    action: GetDisableMetricsCollectionActionEnum;
    autoScalingGroupName: string;
    metrics?: string[];
    version: GetDisableMetricsCollectionVersionEnum;
}
export declare class GetDisableMetricsCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableMetricsCollectionRequest extends SpeakeasyBase {
    queryParams: GetDisableMetricsCollectionQueryParams;
    headers: GetDisableMetricsCollectionHeaders;
}
export declare class GetDisableMetricsCollectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
