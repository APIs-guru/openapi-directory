import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetSendStatisticsActionEnum {
    GetSendStatistics = "GetSendStatistics"
}
export declare enum PostGetSendStatisticsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostGetSendStatisticsQueryParams extends SpeakeasyBase {
    action: PostGetSendStatisticsActionEnum;
    version: PostGetSendStatisticsVersionEnum;
}
export declare class PostGetSendStatisticsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetSendStatisticsRequest extends SpeakeasyBase {
    queryParams: PostGetSendStatisticsQueryParams;
    headers: PostGetSendStatisticsHeaders;
}
export declare class PostGetSendStatisticsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
