import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFlowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFlowRequestBody extends SpeakeasyBase {
    flowName: string;
}
export declare class DescribeFlowRequest extends SpeakeasyBase {
    headers: DescribeFlowHeaders;
    request: DescribeFlowRequestBody;
}
export declare class DescribeFlowResponse extends SpeakeasyBase {
    contentType: string;
    describeFlowResponse?: shared.DescribeFlowResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
