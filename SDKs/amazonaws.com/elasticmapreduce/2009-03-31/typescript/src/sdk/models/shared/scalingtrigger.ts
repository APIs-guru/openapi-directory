import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchAlarmDefinition } from "./cloudwatchalarmdefinition";



// ScalingTrigger
/** 
 * The conditions that trigger an automatic scaling activity.
**/
export class ScalingTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchAlarmDefinition" })
  cloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
}
