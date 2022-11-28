import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerAction } from "./customeraction";
import { RuleEvaluation } from "./ruleevaluation";
import { AlarmStateNameEnum } from "./alarmstatenameenum";
import { SystemEvent } from "./systemevent";



// AlarmState
/** 
 * Contains information about the current state of the alarm.
**/
export class AlarmState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerAction" })
  customerAction?: CustomerAction;

  @SpeakeasyMetadata({ data: "json, name=ruleEvaluation" })
  ruleEvaluation?: RuleEvaluation;

  @SpeakeasyMetadata({ data: "json, name=stateName" })
  stateName?: AlarmStateNameEnum;

  @SpeakeasyMetadata({ data: "json, name=systemEvent" })
  systemEvent?: SystemEvent;
}
