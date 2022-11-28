import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeJobFlowsXAmzTargetEnum {
    ElasticMapReduceDescribeJobFlows = "ElasticMapReduce.DescribeJobFlows"
}
export declare class DescribeJobFlowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeJobFlowsXAmzTargetEnum;
}
export declare class DescribeJobFlowsRequest extends SpeakeasyBase {
    headers: DescribeJobFlowsHeaders;
    request: shared.DescribeJobFlowsInput;
}
export declare class DescribeJobFlowsResponse extends SpeakeasyBase {
    contentType: string;
    describeJobFlowsOutput?: shared.DescribeJobFlowsOutput;
    internalServerError?: any;
    statusCode: number;
}
