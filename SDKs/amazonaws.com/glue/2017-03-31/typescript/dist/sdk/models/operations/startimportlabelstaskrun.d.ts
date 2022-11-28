import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartImportLabelsTaskRunXAmzTargetEnum {
    AwsGlueStartImportLabelsTaskRun = "AWSGlue.StartImportLabelsTaskRun"
}
export declare class StartImportLabelsTaskRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartImportLabelsTaskRunXAmzTargetEnum;
}
export declare class StartImportLabelsTaskRunRequest extends SpeakeasyBase {
    headers: StartImportLabelsTaskRunHeaders;
    request: shared.StartImportLabelsTaskRunRequest;
}
export declare class StartImportLabelsTaskRunResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    startImportLabelsTaskRunResponse?: shared.StartImportLabelsTaskRunResponse;
    statusCode: number;
}
