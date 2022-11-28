import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDevEndpointXAmzTargetEnum {
    AwsGlueUpdateDevEndpoint = "AWSGlue.UpdateDevEndpoint"
}
export declare class UpdateDevEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDevEndpointXAmzTargetEnum;
}
export declare class UpdateDevEndpointRequest extends SpeakeasyBase {
    headers: UpdateDevEndpointHeaders;
    request: shared.UpdateDevEndpointRequest;
}
export declare class UpdateDevEndpointResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateDevEndpointResponse?: Map<string, any>;
    validationException?: any;
}
