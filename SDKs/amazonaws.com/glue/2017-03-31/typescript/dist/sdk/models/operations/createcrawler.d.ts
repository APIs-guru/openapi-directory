import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCrawlerXAmzTargetEnum {
    AwsGlueCreateCrawler = "AWSGlue.CreateCrawler"
}
export declare class CreateCrawlerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCrawlerXAmzTargetEnum;
}
export declare class CreateCrawlerRequest extends SpeakeasyBase {
    headers: CreateCrawlerHeaders;
    request: shared.CreateCrawlerRequest;
}
export declare class CreateCrawlerResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    createCrawlerResponse?: Map<string, any>;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
