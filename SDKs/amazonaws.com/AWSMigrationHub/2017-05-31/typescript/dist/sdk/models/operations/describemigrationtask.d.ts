import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeMigrationTaskXAmzTargetEnum {
    AwsMigrationHubDescribeMigrationTask = "AWSMigrationHub.DescribeMigrationTask"
}
export declare class DescribeMigrationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMigrationTaskXAmzTargetEnum;
}
export declare class DescribeMigrationTaskRequest extends SpeakeasyBase {
    headers: DescribeMigrationTaskHeaders;
    request: shared.DescribeMigrationTaskRequest;
}
export declare class DescribeMigrationTaskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeMigrationTaskResult?: shared.DescribeMigrationTaskResult;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
