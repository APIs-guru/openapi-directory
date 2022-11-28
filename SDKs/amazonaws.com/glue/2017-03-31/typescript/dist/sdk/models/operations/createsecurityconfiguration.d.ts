import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSecurityConfigurationXAmzTargetEnum {
    AwsGlueCreateSecurityConfiguration = "AWSGlue.CreateSecurityConfiguration"
}
export declare class CreateSecurityConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSecurityConfigurationXAmzTargetEnum;
}
export declare class CreateSecurityConfigurationRequest extends SpeakeasyBase {
    headers: CreateSecurityConfigurationHeaders;
    request: shared.CreateSecurityConfigurationRequest;
}
export declare class CreateSecurityConfigurationResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    createSecurityConfigurationResponse?: shared.CreateSecurityConfigurationResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
