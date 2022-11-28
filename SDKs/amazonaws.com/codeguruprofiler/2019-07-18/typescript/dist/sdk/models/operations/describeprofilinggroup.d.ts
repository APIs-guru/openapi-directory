import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeProfilingGroupPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class DescribeProfilingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeProfilingGroupRequest extends SpeakeasyBase {
    pathParams: DescribeProfilingGroupPathParams;
    headers: DescribeProfilingGroupHeaders;
}
export declare class DescribeProfilingGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeProfilingGroupResponse?: shared.DescribeProfilingGroupResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
