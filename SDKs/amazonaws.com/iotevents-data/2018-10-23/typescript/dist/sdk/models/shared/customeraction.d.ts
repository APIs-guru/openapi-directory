import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AcknowledgeActionConfiguration } from "./acknowledgeactionconfiguration";
import { CustomerActionNameEnum } from "./customeractionnameenum";
import { DisableActionConfiguration } from "./disableactionconfiguration";
import { EnableActionConfiguration } from "./enableactionconfiguration";
import { ResetActionConfiguration } from "./resetactionconfiguration";
import { SnoozeActionConfiguration } from "./snoozeactionconfiguration";
/**
 * Contains information about the action that you can take to respond to the alarm.
**/
export declare class CustomerAction extends SpeakeasyBase {
    acknowledgeActionConfiguration?: AcknowledgeActionConfiguration;
    actionName?: CustomerActionNameEnum;
    disableActionConfiguration?: DisableActionConfiguration;
    enableActionConfiguration?: EnableActionConfiguration;
    resetActionConfiguration?: ResetActionConfiguration;
    snoozeActionConfiguration?: SnoozeActionConfiguration;
}
