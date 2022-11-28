import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTriggerXAmzTargetEnum {
    AwsGlueGetTrigger = "AWSGlue.GetTrigger"
}
export declare class GetTriggerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTriggerXAmzTargetEnum;
}
export declare class GetTriggerRequest extends SpeakeasyBase {
    headers: GetTriggerHeaders;
    request: shared.GetTriggerRequest;
}
export declare class GetTriggerResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getTriggerResponse?: shared.GetTriggerResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
