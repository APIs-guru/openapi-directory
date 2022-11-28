import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateJobXAmzTargetEnum {
    AwsGlueUpdateJob = "AWSGlue.UpdateJob"
}
export declare class UpdateJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateJobXAmzTargetEnum;
}
export declare class UpdateJobRequest extends SpeakeasyBase {
    headers: UpdateJobHeaders;
    request: shared.UpdateJobRequest;
}
export declare class UpdateJobResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateJobResponse?: shared.UpdateJobResponse;
}
