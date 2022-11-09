import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ApplyPendingMaintenanceActionXAmzTargetEnum {
    AmazonDmSv20160101ApplyPendingMaintenanceAction = "AmazonDMSv20160101.ApplyPendingMaintenanceAction"
}
export declare class ApplyPendingMaintenanceActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ApplyPendingMaintenanceActionXAmzTargetEnum;
}
export declare class ApplyPendingMaintenanceActionRequest extends SpeakeasyBase {
    headers: ApplyPendingMaintenanceActionHeaders;
    request: shared.ApplyPendingMaintenanceActionMessage;
}
export declare class ApplyPendingMaintenanceActionResponse extends SpeakeasyBase {
    applyPendingMaintenanceActionResponse?: shared.ApplyPendingMaintenanceActionResponse;
    contentType: string;
    resourceNotFoundFault?: any;
    statusCode: number;
}
