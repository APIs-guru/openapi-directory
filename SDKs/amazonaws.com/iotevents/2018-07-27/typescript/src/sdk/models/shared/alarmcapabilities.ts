import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcknowledgeFlow } from "./acknowledgeflow";
import { InitializationConfiguration } from "./initializationconfiguration";



// AlarmCapabilities
/** 
 * Contains the configuration information of alarm state changes.
**/
export class AlarmCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgeFlow" })
  acknowledgeFlow?: AcknowledgeFlow;

  @SpeakeasyMetadata({ data: "json, name=initializationConfiguration" })
  initializationConfiguration?: InitializationConfiguration;
}
