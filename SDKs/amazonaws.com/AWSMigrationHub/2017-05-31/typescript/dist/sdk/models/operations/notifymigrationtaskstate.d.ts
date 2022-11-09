import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum NotifyMigrationTaskStateXAmzTargetEnum {
    AwsMigrationHubNotifyMigrationTaskState = "AWSMigrationHub.NotifyMigrationTaskState"
}
export declare class NotifyMigrationTaskStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: NotifyMigrationTaskStateXAmzTargetEnum;
}
export declare class NotifyMigrationTaskStateRequest extends SpeakeasyBase {
    headers: NotifyMigrationTaskStateHeaders;
    request: shared.NotifyMigrationTaskStateRequest;
}
export declare class NotifyMigrationTaskStateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dryRunOperation?: any;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    notifyMigrationTaskStateResult?: Map<string, any>;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedOperation?: any;
}
