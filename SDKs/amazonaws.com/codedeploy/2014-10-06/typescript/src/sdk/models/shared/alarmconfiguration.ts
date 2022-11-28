import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";



// AlarmConfiguration
/** 
 * Information about alarms associated with the deployment group.
**/
export class AlarmConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarms", elemType: Alarm })
  alarms?: Alarm[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ignorePollAlarmFailure" })
  ignorePollAlarmFailure?: boolean;
}
