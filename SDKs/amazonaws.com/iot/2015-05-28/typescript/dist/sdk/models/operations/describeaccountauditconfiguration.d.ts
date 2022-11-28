import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAccountAuditConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAccountAuditConfigurationRequest extends SpeakeasyBase {
    headers: DescribeAccountAuditConfigurationHeaders;
}
export declare class DescribeAccountAuditConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeAccountAuditConfigurationResponse?: shared.DescribeAccountAuditConfigurationResponse;
    internalFailureException?: any;
    statusCode: number;
    throttlingException?: any;
}
