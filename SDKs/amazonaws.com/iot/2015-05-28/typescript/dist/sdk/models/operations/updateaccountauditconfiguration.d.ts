import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAccountAuditConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAccountAuditConfigurationRequestBody extends SpeakeasyBase {
    auditCheckConfigurations?: Map<string, shared.AuditCheckConfiguration>;
    auditNotificationTargetConfigurations?: Map<string, shared.AuditNotificationTarget>;
    roleArn?: string;
}
export declare class UpdateAccountAuditConfigurationRequest extends SpeakeasyBase {
    headers: UpdateAccountAuditConfigurationHeaders;
    request: UpdateAccountAuditConfigurationRequestBody;
}
export declare class UpdateAccountAuditConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
    updateAccountAuditConfigurationResponse?: Map<string, any>;
}
