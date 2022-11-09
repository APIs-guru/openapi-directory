import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerAction } from "./customeraction";
import { RuleEvaluation } from "./ruleevaluation";
import { AlarmStateNameEnum } from "./alarmstatenameenum";
import { SystemEvent } from "./systemevent";


// AlarmState
/** 
 * Contains information about the current state of the alarm.
**/
export class AlarmState extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerAction" })
  customerAction?: CustomerAction;

  @Metadata({ data: "json, name=ruleEvaluation" })
  ruleEvaluation?: RuleEvaluation;

  @Metadata({ data: "json, name=stateName" })
  stateName?: AlarmStateNameEnum;

  @Metadata({ data: "json, name=systemEvent" })
  systemEvent?: SystemEvent;
}
