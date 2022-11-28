import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchAlarmDefinition } from "./cloudwatchalarmdefinition";
/**
 * The conditions that trigger an automatic scaling activity.
**/
export declare class ScalingTrigger extends SpeakeasyBase {
    cloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
}
