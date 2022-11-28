import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006BatchGetOnPremisesInstances = "CodeDeploy_20141006.BatchGetOnPremisesInstances"
}
export declare class BatchGetOnPremisesInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetOnPremisesInstancesXAmzTargetEnum;
}
export declare class BatchGetOnPremisesInstancesRequest extends SpeakeasyBase {
    headers: BatchGetOnPremisesInstancesHeaders;
    request: shared.BatchGetOnPremisesInstancesInput;
}
export declare class BatchGetOnPremisesInstancesResponse extends SpeakeasyBase {
    batchGetOnPremisesInstancesOutput?: shared.BatchGetOnPremisesInstancesOutput;
    batchLimitExceededException?: any;
    contentType: string;
    instanceNameRequiredException?: any;
    invalidInstanceNameException?: any;
    statusCode: number;
}
