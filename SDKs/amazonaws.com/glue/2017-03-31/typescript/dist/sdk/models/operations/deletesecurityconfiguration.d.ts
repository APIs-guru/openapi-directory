import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSecurityConfigurationXAmzTargetEnum {
    AwsGlueDeleteSecurityConfiguration = "AWSGlue.DeleteSecurityConfiguration"
}
export declare class DeleteSecurityConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSecurityConfigurationXAmzTargetEnum;
}
export declare class DeleteSecurityConfigurationRequest extends SpeakeasyBase {
    headers: DeleteSecurityConfigurationHeaders;
    request: shared.DeleteSecurityConfigurationRequest;
}
export declare class DeleteSecurityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteSecurityConfigurationResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
