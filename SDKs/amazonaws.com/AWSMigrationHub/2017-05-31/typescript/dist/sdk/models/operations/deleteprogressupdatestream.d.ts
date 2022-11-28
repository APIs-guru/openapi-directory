import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProgressUpdateStreamXAmzTargetEnum {
    AwsMigrationHubDeleteProgressUpdateStream = "AWSMigrationHub.DeleteProgressUpdateStream"
}
export declare class DeleteProgressUpdateStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProgressUpdateStreamXAmzTargetEnum;
}
export declare class DeleteProgressUpdateStreamRequest extends SpeakeasyBase {
    headers: DeleteProgressUpdateStreamHeaders;
    request: shared.DeleteProgressUpdateStreamRequest;
}
export declare class DeleteProgressUpdateStreamResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteProgressUpdateStreamResult?: Map<string, any>;
    dryRunOperation?: any;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedOperation?: any;
}
