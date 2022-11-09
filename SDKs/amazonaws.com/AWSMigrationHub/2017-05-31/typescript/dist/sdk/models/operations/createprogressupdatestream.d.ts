import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateProgressUpdateStreamXAmzTargetEnum {
    AwsMigrationHubCreateProgressUpdateStream = "AWSMigrationHub.CreateProgressUpdateStream"
}
export declare class CreateProgressUpdateStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProgressUpdateStreamXAmzTargetEnum;
}
export declare class CreateProgressUpdateStreamRequest extends SpeakeasyBase {
    headers: CreateProgressUpdateStreamHeaders;
    request: shared.CreateProgressUpdateStreamRequest;
}
export declare class CreateProgressUpdateStreamResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createProgressUpdateStreamResult?: Map<string, any>;
    dryRunOperation?: any;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedOperation?: any;
}
