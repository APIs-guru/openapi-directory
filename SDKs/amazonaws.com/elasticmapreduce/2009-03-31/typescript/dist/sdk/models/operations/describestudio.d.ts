import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStudioXAmzTargetEnum {
    ElasticMapReduceDescribeStudio = "ElasticMapReduce.DescribeStudio"
}
export declare class DescribeStudioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStudioXAmzTargetEnum;
}
export declare class DescribeStudioRequest extends SpeakeasyBase {
    headers: DescribeStudioHeaders;
    request: shared.DescribeStudioInput;
}
export declare class DescribeStudioResponse extends SpeakeasyBase {
    contentType: string;
    describeStudioOutput?: shared.DescribeStudioOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
