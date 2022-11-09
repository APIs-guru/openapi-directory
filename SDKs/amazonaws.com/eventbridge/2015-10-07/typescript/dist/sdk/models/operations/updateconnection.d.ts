import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateConnectionXAmzTargetEnum {
    AwsEventsUpdateConnection = "AWSEvents.UpdateConnection"
}
export declare class UpdateConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateConnectionXAmzTargetEnum;
}
export declare class UpdateConnectionRequest extends SpeakeasyBase {
    headers: UpdateConnectionHeaders;
    request: shared.UpdateConnectionRequest;
}
export declare class UpdateConnectionResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateConnectionResponse?: shared.UpdateConnectionResponse;
}
