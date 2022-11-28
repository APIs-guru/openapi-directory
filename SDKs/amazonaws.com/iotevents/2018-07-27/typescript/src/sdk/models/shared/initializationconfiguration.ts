import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InitializationConfiguration
/** 
 * Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.
**/
export class InitializationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabledOnInitialization" })
  disabledOnInitialization: boolean;
}
