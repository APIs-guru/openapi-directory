import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DesiredConfiguration } from "./desiredconfiguration";
import { RefreshPreferences } from "./refreshpreferences";
import { InstanceRefreshProgressDetails } from "./instancerefreshprogressdetails";
import { InstanceRefreshStatusEnum } from "./instancerefreshstatusenum";



// InstanceRefresh
/** 
 * Describes an instance refresh for an Auto Scaling group. 
**/
export class InstanceRefresh extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoScalingGroupName?: string;

  @SpeakeasyMetadata()
  desiredConfiguration?: DesiredConfiguration;

  @SpeakeasyMetadata()
  endTime?: Date;

  @SpeakeasyMetadata()
  instanceRefreshId?: string;

  @SpeakeasyMetadata()
  instancesToUpdate?: number;

  @SpeakeasyMetadata()
  percentageComplete?: number;

  @SpeakeasyMetadata()
  preferences?: RefreshPreferences;

  @SpeakeasyMetadata()
  progressDetails?: InstanceRefreshProgressDetails;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  status?: InstanceRefreshStatusEnum;

  @SpeakeasyMetadata()
  statusReason?: string;
}
