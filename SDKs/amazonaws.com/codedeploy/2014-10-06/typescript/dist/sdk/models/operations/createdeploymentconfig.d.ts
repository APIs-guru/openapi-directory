import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006CreateDeploymentConfig = "CodeDeploy_20141006.CreateDeploymentConfig"
}
export declare class CreateDeploymentConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeploymentConfigXAmzTargetEnum;
}
export declare class CreateDeploymentConfigRequest extends SpeakeasyBase {
    headers: CreateDeploymentConfigHeaders;
    request: shared.CreateDeploymentConfigInput;
}
export declare class CreateDeploymentConfigResponse extends SpeakeasyBase {
    contentType: string;
    createDeploymentConfigOutput?: shared.CreateDeploymentConfigOutput;
    deploymentConfigAlreadyExistsException?: any;
    deploymentConfigLimitExceededException?: any;
    deploymentConfigNameRequiredException?: any;
    invalidComputePlatformException?: any;
    invalidDeploymentConfigNameException?: any;
    invalidMinimumHealthyHostValueException?: any;
    invalidTrafficRoutingConfigurationException?: any;
    statusCode: number;
}
