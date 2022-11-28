import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteMlTransformXAmzTargetEnum {
    AwsGlueDeleteMlTransform = "AWSGlue.DeleteMLTransform"
}
export declare class DeleteMlTransformHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMlTransformXAmzTargetEnum;
}
export declare class DeleteMlTransformRequest extends SpeakeasyBase {
    headers: DeleteMlTransformHeaders;
    request: shared.DeleteMlTransformRequest;
}
export declare class DeleteMlTransformResponse extends SpeakeasyBase {
    contentType: string;
    deleteMlTransformResponse?: shared.DeleteMlTransformResponse;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
