import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlarmAction } from "./alarmaction";


// AlarmEventActions
/** 
 * Contains information about one or more alarm actions.
**/
export class AlarmEventActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmActions", elemType: shared.AlarmAction })
  alarmActions?: AlarmAction[];
}
