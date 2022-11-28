import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutActionRevisionXAmzTargetEnum {
    CodePipeline20150709PutActionRevision = "CodePipeline_20150709.PutActionRevision"
}
export declare class PutActionRevisionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutActionRevisionXAmzTargetEnum;
}
export declare class PutActionRevisionRequest extends SpeakeasyBase {
    headers: PutActionRevisionHeaders;
    request: shared.PutActionRevisionInput;
}
export declare class PutActionRevisionResponse extends SpeakeasyBase {
    actionNotFoundException?: any;
    contentType: string;
    pipelineNotFoundException?: any;
    putActionRevisionOutput?: shared.PutActionRevisionOutput;
    stageNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
