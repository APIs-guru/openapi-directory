import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateUsageReportSubscriptionXAmzTargetEnum {
    PhotonAdminProxyServiceCreateUsageReportSubscription = "PhotonAdminProxyService.CreateUsageReportSubscription"
}
export declare class CreateUsageReportSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUsageReportSubscriptionXAmzTargetEnum;
}
export declare class CreateUsageReportSubscriptionRequest extends SpeakeasyBase {
    headers: CreateUsageReportSubscriptionHeaders;
    request: Map<string, any>;
}
export declare class CreateUsageReportSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    createUsageReportSubscriptionResult?: shared.CreateUsageReportSubscriptionResult;
    invalidAccountStatusException?: any;
    invalidRoleException?: any;
    limitExceededException?: any;
    statusCode: number;
}
