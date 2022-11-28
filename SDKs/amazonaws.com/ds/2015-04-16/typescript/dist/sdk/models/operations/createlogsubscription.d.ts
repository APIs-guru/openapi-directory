import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLogSubscriptionXAmzTargetEnum {
    DirectoryService20150416CreateLogSubscription = "DirectoryService_20150416.CreateLogSubscription"
}
export declare class CreateLogSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLogSubscriptionXAmzTargetEnum;
}
export declare class CreateLogSubscriptionRequest extends SpeakeasyBase {
    headers: CreateLogSubscriptionHeaders;
    request: shared.CreateLogSubscriptionRequest;
}
export declare class CreateLogSubscriptionResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createLogSubscriptionResult?: Map<string, any>;
    entityAlreadyExistsException?: any;
    entityDoesNotExistException?: any;
    insufficientPermissionsException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
