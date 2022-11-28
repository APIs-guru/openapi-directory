import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDeploymentXAmzTargetEnum {
    CodeDeploy20141006GetDeployment = "CodeDeploy_20141006.GetDeployment"
}
export declare class GetDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeploymentXAmzTargetEnum;
}
export declare class GetDeploymentRequest extends SpeakeasyBase {
    headers: GetDeploymentHeaders;
    request: shared.GetDeploymentInput;
}
export declare class GetDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    deploymentDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    getDeploymentOutput?: shared.GetDeploymentOutput;
    invalidDeploymentIdException?: any;
    statusCode: number;
}
