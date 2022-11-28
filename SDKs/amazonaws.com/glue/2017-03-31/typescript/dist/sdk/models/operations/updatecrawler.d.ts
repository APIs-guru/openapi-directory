import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCrawlerXAmzTargetEnum {
    AwsGlueUpdateCrawler = "AWSGlue.UpdateCrawler"
}
export declare class UpdateCrawlerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCrawlerXAmzTargetEnum;
}
export declare class UpdateCrawlerRequest extends SpeakeasyBase {
    headers: UpdateCrawlerHeaders;
    request: shared.UpdateCrawlerRequest;
}
export declare class UpdateCrawlerResponse extends SpeakeasyBase {
    contentType: string;
    crawlerRunningException?: any;
    entityNotFoundException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateCrawlerResponse?: Map<string, any>;
    versionMismatchException?: any;
}
