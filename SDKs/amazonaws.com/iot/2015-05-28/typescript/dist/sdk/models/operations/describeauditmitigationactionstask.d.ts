import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAuditMitigationActionsTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class DescribeAuditMitigationActionsTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAuditMitigationActionsTaskRequest extends SpeakeasyBase {
    pathParams: DescribeAuditMitigationActionsTaskPathParams;
    headers: DescribeAuditMitigationActionsTaskHeaders;
}
export declare class DescribeAuditMitigationActionsTaskResponse extends SpeakeasyBase {
    contentType: string;
    describeAuditMitigationActionsTaskResponse?: shared.DescribeAuditMitigationActionsTaskResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
