import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDeploymentInstanceXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentInstance = "CodeDeploy_20141006.GetDeploymentInstance"
}
export declare class GetDeploymentInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeploymentInstanceXAmzTargetEnum;
}
export declare class GetDeploymentInstanceRequest extends SpeakeasyBase {
    headers: GetDeploymentInstanceHeaders;
    request: shared.GetDeploymentInstanceInput;
}
export declare class GetDeploymentInstanceResponse extends SpeakeasyBase {
    contentType: string;
    deploymentDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    getDeploymentInstanceOutput?: shared.GetDeploymentInstanceOutput;
    instanceDoesNotExistException?: any;
    instanceIdRequiredException?: any;
    invalidComputePlatformException?: any;
    invalidDeploymentIdException?: any;
    invalidInstanceNameException?: any;
    statusCode: number;
}
