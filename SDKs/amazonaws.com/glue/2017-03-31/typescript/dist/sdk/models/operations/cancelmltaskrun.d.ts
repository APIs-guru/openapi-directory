import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelMlTaskRunXAmzTargetEnum {
    AwsGlueCancelMlTaskRun = "AWSGlue.CancelMLTaskRun"
}
export declare class CancelMlTaskRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelMlTaskRunXAmzTargetEnum;
}
export declare class CancelMlTaskRunRequest extends SpeakeasyBase {
    headers: CancelMlTaskRunHeaders;
    request: shared.CancelMlTaskRunRequest;
}
export declare class CancelMlTaskRunResponse extends SpeakeasyBase {
    cancelMlTaskRunResponse?: shared.CancelMlTaskRunResponse;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
