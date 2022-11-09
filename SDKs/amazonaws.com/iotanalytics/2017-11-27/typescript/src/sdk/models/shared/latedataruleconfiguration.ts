import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeltaTimeSessionWindowConfiguration } from "./deltatimesessionwindowconfiguration";


// LateDataRuleConfiguration
/** 
 * The information needed to configure a delta time session window.
**/
export class LateDataRuleConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=deltaTimeSessionWindowConfiguration" })
  deltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration;
}
