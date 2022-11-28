import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTriggerXAmzTargetEnum {
    AwsGlueCreateTrigger = "AWSGlue.CreateTrigger"
}
export declare class CreateTriggerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTriggerXAmzTargetEnum;
}
export declare class CreateTriggerRequest extends SpeakeasyBase {
    headers: CreateTriggerHeaders;
    request: shared.CreateTriggerRequest;
}
export declare class CreateTriggerResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createTriggerResponse?: shared.CreateTriggerResponse;
    entityNotFoundException?: any;
    idempotentParameterMismatchException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
