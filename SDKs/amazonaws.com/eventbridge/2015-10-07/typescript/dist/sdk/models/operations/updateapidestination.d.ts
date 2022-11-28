import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateApiDestinationXAmzTargetEnum {
    AwsEventsUpdateApiDestination = "AWSEvents.UpdateApiDestination"
}
export declare class UpdateApiDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApiDestinationXAmzTargetEnum;
}
export declare class UpdateApiDestinationRequest extends SpeakeasyBase {
    headers: UpdateApiDestinationHeaders;
    request: shared.UpdateApiDestinationRequest;
}
export declare class UpdateApiDestinationResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateApiDestinationResponse?: shared.UpdateApiDestinationResponse;
}
