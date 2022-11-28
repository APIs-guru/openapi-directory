import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartCrawlerScheduleXAmzTargetEnum {
    AwsGlueStartCrawlerSchedule = "AWSGlue.StartCrawlerSchedule"
}
export declare class StartCrawlerScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartCrawlerScheduleXAmzTargetEnum;
}
export declare class StartCrawlerScheduleRequest extends SpeakeasyBase {
    headers: StartCrawlerScheduleHeaders;
    request: shared.StartCrawlerScheduleRequest;
}
export declare class StartCrawlerScheduleResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    noScheduleException?: any;
    operationTimeoutException?: any;
    schedulerRunningException?: any;
    schedulerTransitioningException?: any;
    startCrawlerScheduleResponse?: Map<string, any>;
    statusCode: number;
}
