import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFlowExecutionRecordsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeFlowExecutionRecordsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFlowExecutionRecordsRequestBody extends SpeakeasyBase {
    flowName: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeFlowExecutionRecordsRequest extends SpeakeasyBase {
    queryParams: DescribeFlowExecutionRecordsQueryParams;
    headers: DescribeFlowExecutionRecordsHeaders;
    request: DescribeFlowExecutionRecordsRequestBody;
}
export declare class DescribeFlowExecutionRecordsResponse extends SpeakeasyBase {
    contentType: string;
    describeFlowExecutionRecordsResponse?: shared.DescribeFlowExecutionRecordsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
