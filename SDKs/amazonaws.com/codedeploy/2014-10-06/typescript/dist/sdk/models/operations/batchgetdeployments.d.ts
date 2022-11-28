import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetDeploymentsXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeployments = "CodeDeploy_20141006.BatchGetDeployments"
}
export declare class BatchGetDeploymentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDeploymentsXAmzTargetEnum;
}
export declare class BatchGetDeploymentsRequest extends SpeakeasyBase {
    headers: BatchGetDeploymentsHeaders;
    request: shared.BatchGetDeploymentsInput;
}
export declare class BatchGetDeploymentsResponse extends SpeakeasyBase {
    batchGetDeploymentsOutput?: shared.BatchGetDeploymentsOutput;
    batchLimitExceededException?: any;
    contentType: string;
    deploymentIdRequiredException?: any;
    invalidDeploymentIdException?: any;
    statusCode: number;
}
