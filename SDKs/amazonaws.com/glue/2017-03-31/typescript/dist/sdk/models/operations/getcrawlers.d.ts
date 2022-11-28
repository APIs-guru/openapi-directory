import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCrawlersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetCrawlersXAmzTargetEnum {
    AwsGlueGetCrawlers = "AWSGlue.GetCrawlers"
}
export declare class GetCrawlersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCrawlersXAmzTargetEnum;
}
export declare class GetCrawlersRequest extends SpeakeasyBase {
    queryParams: GetCrawlersQueryParams;
    headers: GetCrawlersHeaders;
    request: shared.GetCrawlersRequest;
}
export declare class GetCrawlersResponse extends SpeakeasyBase {
    contentType: string;
    getCrawlersResponse?: shared.GetCrawlersResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
