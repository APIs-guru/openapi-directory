import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentConfig = "CodeDeploy_20141006.GetDeploymentConfig"
}
export declare class GetDeploymentConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeploymentConfigXAmzTargetEnum;
}
export declare class GetDeploymentConfigRequest extends SpeakeasyBase {
    headers: GetDeploymentConfigHeaders;
    request: shared.GetDeploymentConfigInput;
}
export declare class GetDeploymentConfigResponse extends SpeakeasyBase {
    contentType: string;
    deploymentConfigDoesNotExistException?: any;
    deploymentConfigNameRequiredException?: any;
    getDeploymentConfigOutput?: shared.GetDeploymentConfigOutput;
    invalidComputePlatformException?: any;
    invalidDeploymentConfigNameException?: any;
    statusCode: number;
}
