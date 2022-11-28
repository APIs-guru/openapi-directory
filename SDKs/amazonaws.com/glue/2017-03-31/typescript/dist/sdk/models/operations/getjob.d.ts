import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetJobXAmzTargetEnum {
    AwsGlueGetJob = "AWSGlue.GetJob"
}
export declare class GetJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobXAmzTargetEnum;
}
export declare class GetJobRequest extends SpeakeasyBase {
    headers: GetJobHeaders;
    request: shared.GetJobRequest;
}
export declare class GetJobResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getJobResponse?: shared.GetJobResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
