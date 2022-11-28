import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePipelineXAmzTargetEnum {
    CodePipeline20150709DeletePipeline = "CodePipeline_20150709.DeletePipeline"
}
export declare class DeletePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePipelineXAmzTargetEnum;
}
export declare class DeletePipelineRequest extends SpeakeasyBase {
    headers: DeletePipelineHeaders;
    request: shared.DeletePipelineInput;
}
export declare class DeletePipelineResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    statusCode: number;
    validationException?: any;
}
