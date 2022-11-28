import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetCrawlersXAmzTargetEnum {
    AwsGlueBatchGetCrawlers = "AWSGlue.BatchGetCrawlers"
}
export declare class BatchGetCrawlersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetCrawlersXAmzTargetEnum;
}
export declare class BatchGetCrawlersRequest extends SpeakeasyBase {
    headers: BatchGetCrawlersHeaders;
    request: shared.BatchGetCrawlersRequest;
}
export declare class BatchGetCrawlersResponse extends SpeakeasyBase {
    batchGetCrawlersResponse?: shared.BatchGetCrawlersResponse;
    contentType: string;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
