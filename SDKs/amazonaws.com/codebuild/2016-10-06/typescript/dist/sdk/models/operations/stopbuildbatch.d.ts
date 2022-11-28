import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopBuildBatchXAmzTargetEnum {
    CodeBuild20161006StopBuildBatch = "CodeBuild_20161006.StopBuildBatch"
}
export declare class StopBuildBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopBuildBatchXAmzTargetEnum;
}
export declare class StopBuildBatchRequest extends SpeakeasyBase {
    headers: StopBuildBatchHeaders;
    request: shared.StopBuildBatchInput;
}
export declare class StopBuildBatchResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopBuildBatchOutput?: shared.StopBuildBatchOutput;
}
