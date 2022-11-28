import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAccountAuditConfigurationQueryParams extends SpeakeasyBase {
    deleteScheduledAudits?: boolean;
}
export declare class DeleteAccountAuditConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAccountAuditConfigurationRequest extends SpeakeasyBase {
    queryParams: DeleteAccountAuditConfigurationQueryParams;
    headers: DeleteAccountAuditConfigurationHeaders;
}
export declare class DeleteAccountAuditConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteAccountAuditConfigurationResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
