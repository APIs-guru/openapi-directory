import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetSendStatisticsActionEnum {
    GetSendStatistics = "GetSendStatistics"
}
export declare enum GetGetSendStatisticsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetGetSendStatisticsQueryParams extends SpeakeasyBase {
    action: GetGetSendStatisticsActionEnum;
    version: GetGetSendStatisticsVersionEnum;
}
export declare class GetGetSendStatisticsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetSendStatisticsRequest extends SpeakeasyBase {
    queryParams: GetGetSendStatisticsQueryParams;
    headers: GetGetSendStatisticsHeaders;
}
export declare class GetGetSendStatisticsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
