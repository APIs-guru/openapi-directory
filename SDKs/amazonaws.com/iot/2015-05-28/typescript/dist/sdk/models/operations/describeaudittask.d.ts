import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAuditTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class DescribeAuditTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAuditTaskRequest extends SpeakeasyBase {
    pathParams: DescribeAuditTaskPathParams;
    headers: DescribeAuditTaskHeaders;
}
export declare class DescribeAuditTaskResponse extends SpeakeasyBase {
    contentType: string;
    describeAuditTaskResponse?: shared.DescribeAuditTaskResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
