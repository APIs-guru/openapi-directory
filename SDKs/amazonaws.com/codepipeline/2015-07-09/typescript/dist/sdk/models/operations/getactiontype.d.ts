import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetActionTypeXAmzTargetEnum {
    CodePipeline20150709GetActionType = "CodePipeline_20150709.GetActionType"
}
export declare class GetActionTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetActionTypeXAmzTargetEnum;
}
export declare class GetActionTypeRequest extends SpeakeasyBase {
    headers: GetActionTypeHeaders;
    request: shared.GetActionTypeInput;
}
export declare class GetActionTypeResponse extends SpeakeasyBase {
    actionTypeNotFoundException?: any;
    contentType: string;
    getActionTypeOutput?: shared.GetActionTypeOutput;
    statusCode: number;
    validationException?: any;
}
