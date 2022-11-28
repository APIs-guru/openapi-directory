import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCrawlerXAmzTargetEnum {
    AwsGlueGetCrawler = "AWSGlue.GetCrawler"
}
export declare class GetCrawlerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCrawlerXAmzTargetEnum;
}
export declare class GetCrawlerRequest extends SpeakeasyBase {
    headers: GetCrawlerHeaders;
    request: shared.GetCrawlerRequest;
}
export declare class GetCrawlerResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getCrawlerResponse?: shared.GetCrawlerResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
