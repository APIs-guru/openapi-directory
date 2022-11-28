import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RetryBuildBatchXAmzTargetEnum {
    CodeBuild20161006RetryBuildBatch = "CodeBuild_20161006.RetryBuildBatch"
}
export declare class RetryBuildBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetryBuildBatchXAmzTargetEnum;
}
export declare class RetryBuildBatchRequest extends SpeakeasyBase {
    headers: RetryBuildBatchHeaders;
    request: shared.RetryBuildBatchInput;
}
export declare class RetryBuildBatchResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    retryBuildBatchOutput?: shared.RetryBuildBatchOutput;
    statusCode: number;
}
