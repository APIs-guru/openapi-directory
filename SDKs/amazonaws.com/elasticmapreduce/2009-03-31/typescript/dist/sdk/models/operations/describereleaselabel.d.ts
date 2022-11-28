import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeReleaseLabelXAmzTargetEnum {
    ElasticMapReduceDescribeReleaseLabel = "ElasticMapReduce.DescribeReleaseLabel"
}
export declare class DescribeReleaseLabelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReleaseLabelXAmzTargetEnum;
}
export declare class DescribeReleaseLabelRequest extends SpeakeasyBase {
    headers: DescribeReleaseLabelHeaders;
    request: shared.DescribeReleaseLabelInput;
}
export declare class DescribeReleaseLabelResponse extends SpeakeasyBase {
    contentType: string;
    describeReleaseLabelOutput?: shared.DescribeReleaseLabelOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
