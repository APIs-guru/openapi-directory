import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDetectMitigationActionsTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class DescribeDetectMitigationActionsTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDetectMitigationActionsTaskRequest extends SpeakeasyBase {
    pathParams: DescribeDetectMitigationActionsTaskPathParams;
    headers: DescribeDetectMitigationActionsTaskHeaders;
}
export declare class DescribeDetectMitigationActionsTaskResponse extends SpeakeasyBase {
    contentType: string;
    describeDetectMitigationActionsTaskResponse?: shared.DescribeDetectMitigationActionsTaskResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
