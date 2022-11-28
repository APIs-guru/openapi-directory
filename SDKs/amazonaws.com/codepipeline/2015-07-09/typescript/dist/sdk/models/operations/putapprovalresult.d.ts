import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutApprovalResultXAmzTargetEnum {
    CodePipeline20150709PutApprovalResult = "CodePipeline_20150709.PutApprovalResult"
}
export declare class PutApprovalResultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutApprovalResultXAmzTargetEnum;
}
export declare class PutApprovalResultRequest extends SpeakeasyBase {
    headers: PutApprovalResultHeaders;
    request: shared.PutApprovalResultInput;
}
export declare class PutApprovalResultResponse extends SpeakeasyBase {
    actionNotFoundException?: any;
    approvalAlreadyCompletedException?: any;
    contentType: string;
    invalidApprovalTokenException?: any;
    pipelineNotFoundException?: any;
    putApprovalResultOutput?: shared.PutApprovalResultOutput;
    stageNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
