import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteApiDestinationXAmzTargetEnum {
    AwsEventsDeleteApiDestination = "AWSEvents.DeleteApiDestination"
}
export declare class DeleteApiDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApiDestinationXAmzTargetEnum;
}
export declare class DeleteApiDestinationRequest extends SpeakeasyBase {
    headers: DeleteApiDestinationHeaders;
    request: shared.DeleteApiDestinationRequest;
}
export declare class DeleteApiDestinationResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteApiDestinationResponse?: Map<string, any>;
    internalException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
