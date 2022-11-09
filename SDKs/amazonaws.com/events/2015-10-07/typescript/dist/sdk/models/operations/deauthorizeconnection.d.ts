import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeauthorizeConnectionXAmzTargetEnum {
    AwsEventsDeauthorizeConnection = "AWSEvents.DeauthorizeConnection"
}
export declare class DeauthorizeConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeauthorizeConnectionXAmzTargetEnum;
}
export declare class DeauthorizeConnectionRequest extends SpeakeasyBase {
    headers: DeauthorizeConnectionHeaders;
    request: shared.DeauthorizeConnectionRequest;
}
export declare class DeauthorizeConnectionResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deauthorizeConnectionResponse?: shared.DeauthorizeConnectionResponse;
    internalException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
