import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartExportLabelsTaskRunXAmzTargetEnum {
    AwsGlueStartExportLabelsTaskRun = "AWSGlue.StartExportLabelsTaskRun"
}
export declare class StartExportLabelsTaskRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartExportLabelsTaskRunXAmzTargetEnum;
}
export declare class StartExportLabelsTaskRunRequest extends SpeakeasyBase {
    headers: StartExportLabelsTaskRunHeaders;
    request: shared.StartExportLabelsTaskRunRequest;
}
export declare class StartExportLabelsTaskRunResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    startExportLabelsTaskRunResponse?: shared.StartExportLabelsTaskRunResponse;
    statusCode: number;
}
