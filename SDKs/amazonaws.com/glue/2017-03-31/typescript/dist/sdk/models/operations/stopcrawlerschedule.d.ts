import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopCrawlerScheduleXAmzTargetEnum {
    AwsGlueStopCrawlerSchedule = "AWSGlue.StopCrawlerSchedule"
}
export declare class StopCrawlerScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopCrawlerScheduleXAmzTargetEnum;
}
export declare class StopCrawlerScheduleRequest extends SpeakeasyBase {
    headers: StopCrawlerScheduleHeaders;
    request: shared.StopCrawlerScheduleRequest;
}
export declare class StopCrawlerScheduleResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    operationTimeoutException?: any;
    schedulerNotRunningException?: any;
    schedulerTransitioningException?: any;
    statusCode: number;
    stopCrawlerScheduleResponse?: Map<string, any>;
}
