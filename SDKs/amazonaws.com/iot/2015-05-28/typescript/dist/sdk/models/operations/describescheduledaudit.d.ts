import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeScheduledAuditPathParams extends SpeakeasyBase {
    scheduledAuditName: string;
}
export declare class DescribeScheduledAuditHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeScheduledAuditRequest extends SpeakeasyBase {
    pathParams: DescribeScheduledAuditPathParams;
    headers: DescribeScheduledAuditHeaders;
}
export declare class DescribeScheduledAuditResponse extends SpeakeasyBase {
    contentType: string;
    describeScheduledAuditResponse?: shared.DescribeScheduledAuditResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
