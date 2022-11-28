import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteConnectionXAmzTargetEnum {
    AwsEventsDeleteConnection = "AWSEvents.DeleteConnection"
}
export declare class DeleteConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConnectionXAmzTargetEnum;
}
export declare class DeleteConnectionRequest extends SpeakeasyBase {
    headers: DeleteConnectionHeaders;
    request: shared.DeleteConnectionRequest;
}
export declare class DeleteConnectionResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteConnectionResponse?: shared.DeleteConnectionResponse;
    internalException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
