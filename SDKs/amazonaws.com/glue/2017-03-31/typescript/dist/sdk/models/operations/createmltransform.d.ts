import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateMlTransformXAmzTargetEnum {
    AwsGlueCreateMlTransform = "AWSGlue.CreateMLTransform"
}
export declare class CreateMlTransformHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMlTransformXAmzTargetEnum;
}
export declare class CreateMlTransformRequest extends SpeakeasyBase {
    headers: CreateMlTransformHeaders;
    request: shared.CreateMlTransformRequest;
}
export declare class CreateMlTransformResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    alreadyExistsException?: any;
    contentType: string;
    createMlTransformResponse?: shared.CreateMlTransformResponse;
    idempotentParameterMismatchException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
