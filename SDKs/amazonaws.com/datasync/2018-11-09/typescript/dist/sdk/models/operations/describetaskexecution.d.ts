import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTaskExecutionXAmzTargetEnum {
    FmrsServiceDescribeTaskExecution = "FmrsService.DescribeTaskExecution"
}
export declare class DescribeTaskExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTaskExecutionXAmzTargetEnum;
}
export declare class DescribeTaskExecutionRequest extends SpeakeasyBase {
    headers: DescribeTaskExecutionHeaders;
    request: shared.DescribeTaskExecutionRequest;
}
export declare class DescribeTaskExecutionResponse extends SpeakeasyBase {
    contentType: string;
    describeTaskExecutionResponse?: shared.DescribeTaskExecutionResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
