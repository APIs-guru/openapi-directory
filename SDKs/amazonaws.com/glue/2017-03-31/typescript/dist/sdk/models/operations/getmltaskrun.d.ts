import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMlTaskRunXAmzTargetEnum {
    AwsGlueGetMlTaskRun = "AWSGlue.GetMLTaskRun"
}
export declare class GetMlTaskRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMlTaskRunXAmzTargetEnum;
}
export declare class GetMlTaskRunRequest extends SpeakeasyBase {
    headers: GetMlTaskRunHeaders;
    request: shared.GetMlTaskRunRequest;
}
export declare class GetMlTaskRunResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getMlTaskRunResponse?: shared.GetMlTaskRunResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
