import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartBuildBatchXAmzTargetEnum {
    CodeBuild20161006StartBuildBatch = "CodeBuild_20161006.StartBuildBatch"
}
export declare class StartBuildBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartBuildBatchXAmzTargetEnum;
}
export declare class StartBuildBatchRequest extends SpeakeasyBase {
    headers: StartBuildBatchHeaders;
    request: shared.StartBuildBatchInput;
}
export declare class StartBuildBatchResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    startBuildBatchOutput?: shared.StartBuildBatchOutput;
    statusCode: number;
}
