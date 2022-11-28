import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetBuildBatchesXAmzTargetEnum {
    CodeBuild20161006BatchGetBuildBatches = "CodeBuild_20161006.BatchGetBuildBatches"
}
export declare class BatchGetBuildBatchesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetBuildBatchesXAmzTargetEnum;
}
export declare class BatchGetBuildBatchesRequest extends SpeakeasyBase {
    headers: BatchGetBuildBatchesHeaders;
    request: shared.BatchGetBuildBatchesInput;
}
export declare class BatchGetBuildBatchesResponse extends SpeakeasyBase {
    batchGetBuildBatchesOutput?: shared.BatchGetBuildBatchesOutput;
    contentType: string;
    invalidInputException?: any;
    statusCode: number;
}
