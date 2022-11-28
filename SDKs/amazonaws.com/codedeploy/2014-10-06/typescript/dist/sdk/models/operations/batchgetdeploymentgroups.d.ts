import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetDeploymentGroupsXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentGroups = "CodeDeploy_20141006.BatchGetDeploymentGroups"
}
export declare class BatchGetDeploymentGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDeploymentGroupsXAmzTargetEnum;
}
export declare class BatchGetDeploymentGroupsRequest extends SpeakeasyBase {
    headers: BatchGetDeploymentGroupsHeaders;
    request: shared.BatchGetDeploymentGroupsInput;
}
export declare class BatchGetDeploymentGroupsResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    batchGetDeploymentGroupsOutput?: shared.BatchGetDeploymentGroupsOutput;
    batchLimitExceededException?: any;
    contentType: string;
    deploymentConfigDoesNotExistException?: any;
    deploymentGroupNameRequiredException?: any;
    invalidApplicationNameException?: any;
    invalidDeploymentGroupNameException?: any;
    statusCode: number;
}
