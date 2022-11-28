import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePipelineXAmzTargetEnum {
    CodePipeline20150709CreatePipeline = "CodePipeline_20150709.CreatePipeline"
}
export declare class CreatePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePipelineXAmzTargetEnum;
}
export declare class CreatePipelineRequest extends SpeakeasyBase {
    headers: CreatePipelineHeaders;
    request: shared.CreatePipelineInput;
}
export declare class CreatePipelineResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createPipelineOutput?: shared.CreatePipelineOutput;
    invalidActionDeclarationException?: any;
    invalidBlockerDeclarationException?: any;
    invalidStageDeclarationException?: any;
    invalidStructureException?: any;
    invalidTagsException?: any;
    limitExceededException?: any;
    pipelineNameInUseException?: any;
    statusCode: number;
    tooManyTagsException?: any;
    validationException?: any;
}
