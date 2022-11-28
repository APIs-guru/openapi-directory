import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddJobFlowStepsXAmzTargetEnum {
    ElasticMapReduceAddJobFlowSteps = "ElasticMapReduce.AddJobFlowSteps"
}
export declare class AddJobFlowStepsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddJobFlowStepsXAmzTargetEnum;
}
export declare class AddJobFlowStepsRequest extends SpeakeasyBase {
    headers: AddJobFlowStepsHeaders;
    request: shared.AddJobFlowStepsInput;
}
export declare class AddJobFlowStepsResponse extends SpeakeasyBase {
    addJobFlowStepsOutput?: shared.AddJobFlowStepsOutput;
    contentType: string;
    internalServerError?: any;
    statusCode: number;
}
