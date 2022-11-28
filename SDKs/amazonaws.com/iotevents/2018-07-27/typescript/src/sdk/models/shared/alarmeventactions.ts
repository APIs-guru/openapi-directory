import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmAction } from "./alarmaction";



// AlarmEventActions
/** 
 * Contains information about one or more alarm actions.
**/
export class AlarmEventActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmActions", elemType: AlarmAction })
  alarmActions?: AlarmAction[];
}
