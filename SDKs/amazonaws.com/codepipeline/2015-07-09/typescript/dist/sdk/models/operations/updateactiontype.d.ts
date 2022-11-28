import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateActionTypeXAmzTargetEnum {
    CodePipeline20150709UpdateActionType = "CodePipeline_20150709.UpdateActionType"
}
export declare class UpdateActionTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateActionTypeXAmzTargetEnum;
}
export declare class UpdateActionTypeRequest extends SpeakeasyBase {
    headers: UpdateActionTypeHeaders;
    request: shared.UpdateActionTypeInput;
}
export declare class UpdateActionTypeResponse extends SpeakeasyBase {
    actionTypeNotFoundException?: any;
    contentType: string;
    requestFailedException?: any;
    statusCode: number;
    validationException?: any;
}
