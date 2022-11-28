import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribePendingMaintenanceActionsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribePendingMaintenanceActionsXAmzTargetEnum {
    AmazonDmSv20160101DescribePendingMaintenanceActions = "AmazonDMSv20160101.DescribePendingMaintenanceActions"
}
export declare class DescribePendingMaintenanceActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePendingMaintenanceActionsXAmzTargetEnum;
}
export declare class DescribePendingMaintenanceActionsRequest extends SpeakeasyBase {
    queryParams: DescribePendingMaintenanceActionsQueryParams;
    headers: DescribePendingMaintenanceActionsHeaders;
    request: shared.DescribePendingMaintenanceActionsMessage;
}
export declare class DescribePendingMaintenanceActionsResponse extends SpeakeasyBase {
    contentType: string;
    describePendingMaintenanceActionsResponse?: shared.DescribePendingMaintenanceActionsResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
