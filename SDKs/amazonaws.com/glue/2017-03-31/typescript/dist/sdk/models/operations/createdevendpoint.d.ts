import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDevEndpointXAmzTargetEnum {
    AwsGlueCreateDevEndpoint = "AWSGlue.CreateDevEndpoint"
}
export declare class CreateDevEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDevEndpointXAmzTargetEnum;
}
export declare class CreateDevEndpointRequest extends SpeakeasyBase {
    headers: CreateDevEndpointHeaders;
    request: shared.CreateDevEndpointRequest;
}
export declare class CreateDevEndpointResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    alreadyExistsException?: any;
    contentType: string;
    createDevEndpointResponse?: shared.CreateDevEndpointResponse;
    idempotentParameterMismatchException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
    validationException?: any;
}
