import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RunJobFlowXAmzTargetEnum {
    ElasticMapReduceRunJobFlow = "ElasticMapReduce.RunJobFlow"
}
export declare class RunJobFlowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RunJobFlowXAmzTargetEnum;
}
export declare class RunJobFlowRequest extends SpeakeasyBase {
    headers: RunJobFlowHeaders;
    request: shared.RunJobFlowInput;
}
export declare class RunJobFlowResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    runJobFlowOutput?: shared.RunJobFlowOutput;
    statusCode: number;
}
