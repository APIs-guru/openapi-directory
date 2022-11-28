import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteScheduledAuditPathParams extends SpeakeasyBase {
    scheduledAuditName: string;
}
export declare class DeleteScheduledAuditHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteScheduledAuditRequest extends SpeakeasyBase {
    pathParams: DeleteScheduledAuditPathParams;
    headers: DeleteScheduledAuditHeaders;
}
export declare class DeleteScheduledAuditResponse extends SpeakeasyBase {
    contentType: string;
    deleteScheduledAuditResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
