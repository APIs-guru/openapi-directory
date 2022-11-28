import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCustomActionTypeXAmzTargetEnum {
    CodePipeline20150709CreateCustomActionType = "CodePipeline_20150709.CreateCustomActionType"
}
export declare class CreateCustomActionTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomActionTypeXAmzTargetEnum;
}
export declare class CreateCustomActionTypeRequest extends SpeakeasyBase {
    headers: CreateCustomActionTypeHeaders;
    request: shared.CreateCustomActionTypeInput;
}
export declare class CreateCustomActionTypeResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createCustomActionTypeOutput?: shared.CreateCustomActionTypeOutput;
    invalidTagsException?: any;
    limitExceededException?: any;
    statusCode: number;
    tooManyTagsException?: any;
    validationException?: any;
}
