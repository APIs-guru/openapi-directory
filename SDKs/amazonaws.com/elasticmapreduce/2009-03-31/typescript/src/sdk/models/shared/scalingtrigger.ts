import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchAlarmDefinition } from "./cloudwatchalarmdefinition";


// ScalingTrigger
/** 
 * The conditions that trigger an automatic scaling activity.
**/
export class ScalingTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchAlarmDefinition" })
  cloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
}
