import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DeleteUsageReportSubscriptionXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteUsageReportSubscription = "PhotonAdminProxyService.DeleteUsageReportSubscription"
}
export declare class DeleteUsageReportSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUsageReportSubscriptionXAmzTargetEnum;
}
export declare class DeleteUsageReportSubscriptionRequest extends SpeakeasyBase {
    headers: DeleteUsageReportSubscriptionHeaders;
    request: Map<string, any>;
}
export declare class DeleteUsageReportSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    deleteUsageReportSubscriptionResult?: Map<string, any>;
    invalidAccountStatusException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
