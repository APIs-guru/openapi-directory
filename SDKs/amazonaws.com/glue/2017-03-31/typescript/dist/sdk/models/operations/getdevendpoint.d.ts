import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDevEndpointXAmzTargetEnum {
    AwsGlueGetDevEndpoint = "AWSGlue.GetDevEndpoint"
}
export declare class GetDevEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDevEndpointXAmzTargetEnum;
}
export declare class GetDevEndpointRequest extends SpeakeasyBase {
    headers: GetDevEndpointHeaders;
    request: shared.GetDevEndpointRequest;
}
export declare class GetDevEndpointResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getDevEndpointResponse?: shared.GetDevEndpointResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
