import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InitializationConfiguration
/** 
 * Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.
**/
export class InitializationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabledOnInitialization" })
  disabledOnInitialization: boolean;
}
