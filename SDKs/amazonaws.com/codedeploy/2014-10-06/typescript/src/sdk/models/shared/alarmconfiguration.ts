import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alarm } from "./alarm";


// AlarmConfiguration
/** 
 * Information about alarms associated with the deployment group.
**/
export class AlarmConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarms", elemType: shared.Alarm })
  alarms?: Alarm[];

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=ignorePollAlarmFailure" })
  ignorePollAlarmFailure?: boolean;
}
