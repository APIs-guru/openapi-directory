import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains information about policies that define how a deployment updates components and handles failure.
**/
export declare class CreateDeploymentRequestBodyDeploymentPolicies extends SpeakeasyBase {
    componentUpdatePolicy?: shared.DeploymentComponentUpdatePolicy;
    configurationValidationPolicy?: shared.DeploymentConfigurationValidationPolicy;
    failureHandlingPolicy?: shared.DeploymentFailureHandlingPolicyEnum;
}
/**
 * Contains information about an IoT job configuration.
**/
export declare class CreateDeploymentRequestBodyIotJobConfiguration extends SpeakeasyBase {
    abortConfig?: shared.IoTJobAbortConfig;
    jobExecutionsRolloutConfig?: shared.IoTJobExecutionsRolloutConfig;
    timeoutConfig?: shared.IoTJobTimeoutConfig;
}
export declare class CreateDeploymentRequestBody extends SpeakeasyBase {
    clientToken?: string;
    components?: Map<string, shared.ComponentDeploymentSpecification>;
    deploymentName?: string;
    deploymentPolicies?: CreateDeploymentRequestBodyDeploymentPolicies;
    iotJobConfiguration?: CreateDeploymentRequestBodyIotJobConfiguration;
    tags?: Map<string, string>;
    targetArn: string;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    headers: CreateDeploymentHeaders;
    request: CreateDeploymentRequestBody;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createDeploymentResponse?: shared.CreateDeploymentResponse;
    internalServerException?: any;
    requestAlreadyInProgressException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
