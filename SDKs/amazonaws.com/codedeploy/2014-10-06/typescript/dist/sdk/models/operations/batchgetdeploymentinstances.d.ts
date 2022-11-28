import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetDeploymentInstancesXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentInstances = "CodeDeploy_20141006.BatchGetDeploymentInstances"
}
export declare class BatchGetDeploymentInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDeploymentInstancesXAmzTargetEnum;
}
export declare class BatchGetDeploymentInstancesRequest extends SpeakeasyBase {
    headers: BatchGetDeploymentInstancesHeaders;
    request: shared.BatchGetDeploymentInstancesInput;
}
export declare class BatchGetDeploymentInstancesResponse extends SpeakeasyBase {
    batchGetDeploymentInstancesOutput?: shared.BatchGetDeploymentInstancesOutput;
    batchLimitExceededException?: any;
    contentType: string;
    deploymentDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    instanceIdRequiredException?: any;
    invalidComputePlatformException?: any;
    invalidDeploymentIdException?: any;
    invalidInstanceNameException?: any;
    statusCode: number;
}
