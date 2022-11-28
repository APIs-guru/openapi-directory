import { SpeakeasyBase } from "../../../internal/utils";
import { DesiredConfiguration } from "./desiredconfiguration";
import { RefreshPreferences } from "./refreshpreferences";
import { InstanceRefreshProgressDetails } from "./instancerefreshprogressdetails";
import { InstanceRefreshStatusEnum } from "./instancerefreshstatusenum";
/**
 * Describes an instance refresh for an Auto Scaling group.
**/
export declare class InstanceRefresh extends SpeakeasyBase {
    autoScalingGroupName?: string;
    desiredConfiguration?: DesiredConfiguration;
    endTime?: Date;
    instanceRefreshId?: string;
    instancesToUpdate?: number;
    percentageComplete?: number;
    preferences?: RefreshPreferences;
    progressDetails?: InstanceRefreshProgressDetails;
    startTime?: Date;
    status?: InstanceRefreshStatusEnum;
    statusReason?: string;
}
