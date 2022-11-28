import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCrawlerScheduleXAmzTargetEnum {
    AwsGlueUpdateCrawlerSchedule = "AWSGlue.UpdateCrawlerSchedule"
}
export declare class UpdateCrawlerScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCrawlerScheduleXAmzTargetEnum;
}
export declare class UpdateCrawlerScheduleRequest extends SpeakeasyBase {
    headers: UpdateCrawlerScheduleHeaders;
    request: shared.UpdateCrawlerScheduleRequest;
}
export declare class UpdateCrawlerScheduleResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    schedulerTransitioningException?: any;
    statusCode: number;
    updateCrawlerScheduleResponse?: Map<string, any>;
    versionMismatchException?: any;
}
