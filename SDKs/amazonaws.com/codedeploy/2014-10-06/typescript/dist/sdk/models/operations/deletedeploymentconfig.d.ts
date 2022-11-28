import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006DeleteDeploymentConfig = "CodeDeploy_20141006.DeleteDeploymentConfig"
}
export declare class DeleteDeploymentConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDeploymentConfigXAmzTargetEnum;
}
export declare class DeleteDeploymentConfigRequest extends SpeakeasyBase {
    headers: DeleteDeploymentConfigHeaders;
    request: shared.DeleteDeploymentConfigInput;
}
export declare class DeleteDeploymentConfigResponse extends SpeakeasyBase {
    contentType: string;
    deploymentConfigInUseException?: any;
    deploymentConfigNameRequiredException?: any;
    invalidDeploymentConfigNameException?: any;
    invalidOperationException?: any;
    statusCode: number;
}
