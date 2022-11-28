import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSecurityConfigurationXAmzTargetEnum {
    AwsGlueGetSecurityConfiguration = "AWSGlue.GetSecurityConfiguration"
}
export declare class GetSecurityConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSecurityConfigurationXAmzTargetEnum;
}
export declare class GetSecurityConfigurationRequest extends SpeakeasyBase {
    headers: GetSecurityConfigurationHeaders;
    request: shared.GetSecurityConfigurationRequest;
}
export declare class GetSecurityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getSecurityConfigurationResponse?: shared.GetSecurityConfigurationResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
