import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeUsageReportSubscriptionsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeUsageReportSubscriptions = "PhotonAdminProxyService.DescribeUsageReportSubscriptions"
}
export declare class DescribeUsageReportSubscriptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUsageReportSubscriptionsXAmzTargetEnum;
}
export declare class DescribeUsageReportSubscriptionsRequest extends SpeakeasyBase {
    headers: DescribeUsageReportSubscriptionsHeaders;
    request: shared.DescribeUsageReportSubscriptionsRequest;
}
export declare class DescribeUsageReportSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    describeUsageReportSubscriptionsResult?: shared.DescribeUsageReportSubscriptionsResult;
    invalidAccountStatusException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
