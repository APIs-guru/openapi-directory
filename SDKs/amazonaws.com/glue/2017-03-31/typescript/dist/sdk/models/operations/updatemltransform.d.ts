import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateMlTransformXAmzTargetEnum {
    AwsGlueUpdateMlTransform = "AWSGlue.UpdateMLTransform"
}
export declare class UpdateMlTransformHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMlTransformXAmzTargetEnum;
}
export declare class UpdateMlTransformRequest extends SpeakeasyBase {
    headers: UpdateMlTransformHeaders;
    request: shared.UpdateMlTransformRequest;
}
export declare class UpdateMlTransformResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateMlTransformResponse?: shared.UpdateMlTransformResponse;
}
