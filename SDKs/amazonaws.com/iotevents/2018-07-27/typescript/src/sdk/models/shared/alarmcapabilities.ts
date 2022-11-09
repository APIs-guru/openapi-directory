import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AcknowledgeFlow } from "./acknowledgeflow";
import { InitializationConfiguration } from "./initializationconfiguration";


// AlarmCapabilities
/** 
 * Contains the configuration information of alarm state changes.
**/
export class AlarmCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgeFlow" })
  acknowledgeFlow?: AcknowledgeFlow;

  @Metadata({ data: "json, name=initializationConfiguration" })
  initializationConfiguration?: InitializationConfiguration;
}
