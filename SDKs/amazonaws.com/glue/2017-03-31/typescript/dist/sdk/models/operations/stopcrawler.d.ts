import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopCrawlerXAmzTargetEnum {
    AwsGlueStopCrawler = "AWSGlue.StopCrawler"
}
export declare class StopCrawlerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopCrawlerXAmzTargetEnum;
}
export declare class StopCrawlerRequest extends SpeakeasyBase {
    headers: StopCrawlerHeaders;
    request: shared.StopCrawlerRequest;
}
export declare class StopCrawlerResponse extends SpeakeasyBase {
    contentType: string;
    crawlerNotRunningException?: any;
    crawlerStoppingException?: any;
    entityNotFoundException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    stopCrawlerResponse?: Map<string, any>;
}
