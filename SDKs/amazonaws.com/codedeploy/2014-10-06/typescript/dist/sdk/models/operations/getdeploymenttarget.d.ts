import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDeploymentTargetXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentTarget = "CodeDeploy_20141006.GetDeploymentTarget"
}
export declare class GetDeploymentTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeploymentTargetXAmzTargetEnum;
}
export declare class GetDeploymentTargetRequest extends SpeakeasyBase {
    headers: GetDeploymentTargetHeaders;
    request: shared.GetDeploymentTargetInput;
}
export declare class GetDeploymentTargetResponse extends SpeakeasyBase {
    contentType: string;
    deploymentDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    deploymentNotStartedException?: any;
    deploymentTargetDoesNotExistException?: any;
    deploymentTargetIdRequiredException?: any;
    getDeploymentTargetOutput?: shared.GetDeploymentTargetOutput;
    invalidDeploymentIdException?: any;
    invalidDeploymentTargetIdException?: any;
    invalidInstanceNameException?: any;
    statusCode: number;
}
