import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateJobXAmzTargetEnum {
    AwsGlueCreateJob = "AWSGlue.CreateJob"
}
export declare class CreateJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateJobXAmzTargetEnum;
}
export declare class CreateJobRequest extends SpeakeasyBase {
    headers: CreateJobHeaders;
    request: shared.CreateJobRequest;
}
export declare class CreateJobResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createJobResponse?: shared.CreateJobResponse;
    idempotentParameterMismatchException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
