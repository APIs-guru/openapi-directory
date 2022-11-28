import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListDeploymentTargetsXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentTargets = "CodeDeploy_20141006.ListDeploymentTargets"
}
export declare class ListDeploymentTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeploymentTargetsXAmzTargetEnum;
}
export declare class ListDeploymentTargetsRequest extends SpeakeasyBase {
    headers: ListDeploymentTargetsHeaders;
    request: shared.ListDeploymentTargetsInput;
}
export declare class ListDeploymentTargetsResponse extends SpeakeasyBase {
    contentType: string;
    deploymentDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    deploymentNotStartedException?: any;
    invalidDeploymentIdException?: any;
    invalidDeploymentInstanceTypeException?: any;
    invalidInstanceStatusException?: any;
    invalidInstanceTypeException?: any;
    invalidNextTokenException?: any;
    listDeploymentTargetsOutput?: shared.ListDeploymentTargetsOutput;
    statusCode: number;
}
