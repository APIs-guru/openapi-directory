import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCrawlerMetricsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetCrawlerMetricsXAmzTargetEnum {
    AwsGlueGetCrawlerMetrics = "AWSGlue.GetCrawlerMetrics"
}
export declare class GetCrawlerMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCrawlerMetricsXAmzTargetEnum;
}
export declare class GetCrawlerMetricsRequest extends SpeakeasyBase {
    queryParams: GetCrawlerMetricsQueryParams;
    headers: GetCrawlerMetricsHeaders;
    request: shared.GetCrawlerMetricsRequest;
}
export declare class GetCrawlerMetricsResponse extends SpeakeasyBase {
    contentType: string;
    getCrawlerMetricsResponse?: shared.GetCrawlerMetricsResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
