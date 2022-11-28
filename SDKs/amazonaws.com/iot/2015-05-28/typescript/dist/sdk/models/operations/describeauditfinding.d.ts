import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAuditFindingPathParams extends SpeakeasyBase {
    findingId: string;
}
export declare class DescribeAuditFindingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAuditFindingRequest extends SpeakeasyBase {
    pathParams: DescribeAuditFindingPathParams;
    headers: DescribeAuditFindingHeaders;
}
export declare class DescribeAuditFindingResponse extends SpeakeasyBase {
    contentType: string;
    describeAuditFindingResponse?: shared.DescribeAuditFindingResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
