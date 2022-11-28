import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetDeploymentTargetsXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentTargets = "CodeDeploy_20141006.BatchGetDeploymentTargets"
}
export declare class BatchGetDeploymentTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDeploymentTargetsXAmzTargetEnum;
}
export declare class BatchGetDeploymentTargetsRequest extends SpeakeasyBase {
    headers: BatchGetDeploymentTargetsHeaders;
    request: shared.BatchGetDeploymentTargetsInput;
}
export declare class BatchGetDeploymentTargetsResponse extends SpeakeasyBase {
    batchGetDeploymentTargetsOutput?: shared.BatchGetDeploymentTargetsOutput;
    contentType: string;
    deploymentDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    deploymentNotStartedException?: any;
    deploymentTargetDoesNotExistException?: any;
    deploymentTargetIdRequiredException?: any;
    deploymentTargetListSizeExceededException?: any;
    instanceDoesNotExistException?: any;
    invalidDeploymentIdException?: any;
    invalidDeploymentTargetIdException?: any;
    statusCode: number;
}
