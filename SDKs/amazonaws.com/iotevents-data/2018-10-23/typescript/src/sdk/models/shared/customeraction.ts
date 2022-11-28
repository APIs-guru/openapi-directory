import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=acknowledgeActionConfiguration" })
  acknowledgeActionConfiguration?: AcknowledgeActionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName?: CustomerActionNameEnum;

  @SpeakeasyMetadata({ data: "json, name=disableActionConfiguration" })
  disableActionConfiguration?: DisableActionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=enableActionConfiguration" })
  enableActionConfiguration?: EnableActionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=resetActionConfiguration" })
  resetActionConfiguration?: ResetActionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=snoozeActionConfiguration" })
  snoozeActionConfiguration?: SnoozeActionConfiguration;
}
