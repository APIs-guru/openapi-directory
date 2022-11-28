import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCrawlerXAmzTargetEnum {
    AwsGlueDeleteCrawler = "AWSGlue.DeleteCrawler"
}
export declare class DeleteCrawlerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCrawlerXAmzTargetEnum;
}
export declare class DeleteCrawlerRequest extends SpeakeasyBase {
    headers: DeleteCrawlerHeaders;
    request: shared.DeleteCrawlerRequest;
}
export declare class DeleteCrawlerResponse extends SpeakeasyBase {
    contentType: string;
    crawlerRunningException?: any;
    deleteCrawlerResponse?: Map<string, any>;
    entityNotFoundException?: any;
    operationTimeoutException?: any;
    schedulerTransitioningException?: any;
    statusCode: number;
}
