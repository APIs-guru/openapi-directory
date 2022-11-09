import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AcknowledgeActionConfiguration } from "./acknowledgeactionconfiguration";
import { CustomerActionNameEnum } from "./customeractionnameenum";
import { DisableActionConfiguration } from "./disableactionconfiguration";
import { EnableActionConfiguration } from "./enableactionconfiguration";
import { ResetActionConfiguration } from "./resetactionconfiguration";
import { SnoozeActionConfiguration } from "./snoozeactionconfiguration";


// CustomerAction
/** 
 * Contains information about the action that you can take to respond to the alarm.
**/
export class CustomerAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgeActionConfiguration" })
  acknowledgeActionConfiguration?: AcknowledgeActionConfiguration;

  @Metadata({ data: "json, name=actionName" })
  actionName?: CustomerActionNameEnum;

  @Metadata({ data: "json, name=disableActionConfiguration" })
  disableActionConfiguration?: DisableActionConfiguration;

  @Metadata({ data: "json, name=enableActionConfiguration" })
  enableActionConfiguration?: EnableActionConfiguration;

  @Metadata({ data: "json, name=resetActionConfiguration" })
  resetActionConfiguration?: ResetActionConfiguration;

  @Metadata({ data: "json, name=snoozeActionConfiguration" })
  snoozeActionConfiguration?: SnoozeActionConfiguration;
}
