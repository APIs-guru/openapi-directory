import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCrawlersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCrawlersXAmzTargetEnum {
    AwsGlueListCrawlers = "AWSGlue.ListCrawlers"
}
export declare class ListCrawlersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCrawlersXAmzTargetEnum;
}
export declare class ListCrawlersRequest extends SpeakeasyBase {
    queryParams: ListCrawlersQueryParams;
    headers: ListCrawlersHeaders;
    request: shared.ListCrawlersRequest;
}
export declare class ListCrawlersResponse extends SpeakeasyBase {
    contentType: string;
    listCrawlersResponse?: shared.ListCrawlersResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
