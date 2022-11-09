import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerAction } from "./customeraction";
import { RuleEvaluation } from "./ruleevaluation";
import { AlarmStateNameEnum } from "./alarmstatenameenum";
import { SystemEvent } from "./systemevent";
/**
 * Contains information about the current state of the alarm.
**/
export declare class AlarmState extends SpeakeasyBase {
    customerAction?: CustomerAction;
    ruleEvaluation?: RuleEvaluation;
    stateName?: AlarmStateNameEnum;
    systemEvent?: SystemEvent;
}
