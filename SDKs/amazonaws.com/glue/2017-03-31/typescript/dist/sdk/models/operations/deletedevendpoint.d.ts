import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDevEndpointXAmzTargetEnum {
    AwsGlueDeleteDevEndpoint = "AWSGlue.DeleteDevEndpoint"
}
export declare class DeleteDevEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDevEndpointXAmzTargetEnum;
}
export declare class DeleteDevEndpointRequest extends SpeakeasyBase {
    headers: DeleteDevEndpointHeaders;
    request: shared.DeleteDevEndpointRequest;
}
export declare class DeleteDevEndpointResponse extends SpeakeasyBase {
    contentType: string;
    deleteDevEndpointResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
