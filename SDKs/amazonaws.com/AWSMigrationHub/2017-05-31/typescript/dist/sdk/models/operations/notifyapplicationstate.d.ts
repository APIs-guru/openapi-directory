import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum NotifyApplicationStateXAmzTargetEnum {
    AwsMigrationHubNotifyApplicationState = "AWSMigrationHub.NotifyApplicationState"
}
export declare class NotifyApplicationStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: NotifyApplicationStateXAmzTargetEnum;
}
export declare class NotifyApplicationStateRequest extends SpeakeasyBase {
    headers: NotifyApplicationStateHeaders;
    request: shared.NotifyApplicationStateRequest;
}
export declare class NotifyApplicationStateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dryRunOperation?: any;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    notifyApplicationStateResult?: Map<string, any>;
    policyErrorException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedOperation?: any;
}
