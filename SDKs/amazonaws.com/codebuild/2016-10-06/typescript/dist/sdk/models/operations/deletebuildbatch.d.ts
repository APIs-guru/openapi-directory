import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBuildBatchXAmzTargetEnum {
    CodeBuild20161006DeleteBuildBatch = "CodeBuild_20161006.DeleteBuildBatch"
}
export declare class DeleteBuildBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBuildBatchXAmzTargetEnum;
}
export declare class DeleteBuildBatchRequest extends SpeakeasyBase {
    headers: DeleteBuildBatchHeaders;
    request: shared.DeleteBuildBatchInput;
}
export declare class DeleteBuildBatchResponse extends SpeakeasyBase {
    contentType: string;
    deleteBuildBatchOutput?: shared.DeleteBuildBatchOutput;
    invalidInputException?: any;
    statusCode: number;
}
