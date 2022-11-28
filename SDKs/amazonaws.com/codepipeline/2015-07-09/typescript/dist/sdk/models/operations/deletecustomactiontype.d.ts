import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCustomActionTypeXAmzTargetEnum {
    CodePipeline20150709DeleteCustomActionType = "CodePipeline_20150709.DeleteCustomActionType"
}
export declare class DeleteCustomActionTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCustomActionTypeXAmzTargetEnum;
}
export declare class DeleteCustomActionTypeRequest extends SpeakeasyBase {
    headers: DeleteCustomActionTypeHeaders;
    request: shared.DeleteCustomActionTypeInput;
}
export declare class DeleteCustomActionTypeResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    statusCode: number;
    validationException?: any;
}
