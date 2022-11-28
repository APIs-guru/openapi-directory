import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStepXAmzTargetEnum {
    ElasticMapReduceDescribeStep = "ElasticMapReduce.DescribeStep"
}
export declare class DescribeStepHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStepXAmzTargetEnum;
}
export declare class DescribeStepRequest extends SpeakeasyBase {
    headers: DescribeStepHeaders;
    request: shared.DescribeStepInput;
}
export declare class DescribeStepResponse extends SpeakeasyBase {
    contentType: string;
    describeStepOutput?: shared.DescribeStepOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
