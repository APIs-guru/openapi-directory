import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePipelineXAmzTargetEnum {
    CodePipeline20150709UpdatePipeline = "CodePipeline_20150709.UpdatePipeline"
}
export declare class UpdatePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePipelineXAmzTargetEnum;
}
export declare class UpdatePipelineRequest extends SpeakeasyBase {
    headers: UpdatePipelineHeaders;
    request: shared.UpdatePipelineInput;
}
export declare class UpdatePipelineResponse extends SpeakeasyBase {
    contentType: string;
    invalidActionDeclarationException?: any;
    invalidBlockerDeclarationException?: any;
    invalidStageDeclarationException?: any;
    invalidStructureException?: any;
    limitExceededException?: any;
    statusCode: number;
    updatePipelineOutput?: shared.UpdatePipelineOutput;
    validationException?: any;
}
