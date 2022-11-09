import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteLogSubscriptionXAmzTargetEnum {
    DirectoryService20150416DeleteLogSubscription = "DirectoryService_20150416.DeleteLogSubscription"
}
export declare class DeleteLogSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLogSubscriptionXAmzTargetEnum;
}
export declare class DeleteLogSubscriptionRequest extends SpeakeasyBase {
    headers: DeleteLogSubscriptionHeaders;
    request: shared.DeleteLogSubscriptionRequest;
}
export declare class DeleteLogSubscriptionResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteLogSubscriptionResult?: Map<string, any>;
    entityDoesNotExistException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
