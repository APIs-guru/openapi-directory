import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeltaTimeSessionWindowConfiguration } from "./deltatimesessionwindowconfiguration";



// LateDataRuleConfiguration
/** 
 * The information needed to configure a delta time session window.
**/
export class LateDataRuleConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deltaTimeSessionWindowConfiguration" })
  deltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration;
}
