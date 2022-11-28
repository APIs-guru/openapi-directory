import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TerminateJobFlowsXAmzTargetEnum {
    ElasticMapReduceTerminateJobFlows = "ElasticMapReduce.TerminateJobFlows"
}
export declare class TerminateJobFlowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateJobFlowsXAmzTargetEnum;
}
export declare class TerminateJobFlowsRequest extends SpeakeasyBase {
    headers: TerminateJobFlowsHeaders;
    request: shared.TerminateJobFlowsInput;
}
export declare class TerminateJobFlowsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    statusCode: number;
}
