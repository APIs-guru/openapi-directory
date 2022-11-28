import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEventBusXAmzTargetEnum {
    AwsEventsDeleteEventBus = "AWSEvents.DeleteEventBus"
}
export declare class DeleteEventBusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEventBusXAmzTargetEnum;
}
export declare class DeleteEventBusRequest extends SpeakeasyBase {
    headers: DeleteEventBusHeaders;
    request: shared.DeleteEventBusRequest;
}
export declare class DeleteEventBusResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    statusCode: number;
}
