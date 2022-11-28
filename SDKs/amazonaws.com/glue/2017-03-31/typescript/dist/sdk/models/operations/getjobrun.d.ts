import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetJobRunXAmzTargetEnum {
    AwsGlueGetJobRun = "AWSGlue.GetJobRun"
}
export declare class GetJobRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobRunXAmzTargetEnum;
}
export declare class GetJobRunRequest extends SpeakeasyBase {
    headers: GetJobRunHeaders;
    request: shared.GetJobRunRequest;
}
export declare class GetJobRunResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getJobRunResponse?: shared.GetJobRunResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
