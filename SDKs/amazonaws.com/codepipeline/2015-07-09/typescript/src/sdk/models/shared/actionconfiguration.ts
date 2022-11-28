import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionConfiguration
/** 
 * Represents information about an action configuration.
**/
export class ActionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: Map<string, string>;
}
