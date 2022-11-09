import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionConfiguration
/** 
 * Represents information about an action configuration.
**/
export class ActionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration?: Map<string, string>;
}
