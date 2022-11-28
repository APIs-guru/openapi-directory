import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartCrawlerXAmzTargetEnum {
    AwsGlueStartCrawler = "AWSGlue.StartCrawler"
}
export declare class StartCrawlerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartCrawlerXAmzTargetEnum;
}
export declare class StartCrawlerRequest extends SpeakeasyBase {
    headers: StartCrawlerHeaders;
    request: shared.StartCrawlerRequest;
}
export declare class StartCrawlerResponse extends SpeakeasyBase {
    contentType: string;
    crawlerRunningException?: any;
    entityNotFoundException?: any;
    operationTimeoutException?: any;
    startCrawlerResponse?: Map<string, any>;
    statusCode: number;
}
