import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CriticalityEnum } from "./criticalityenum";


// TrackingConfig
/** 
 * Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile.
**/
export class TrackingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=autotrack" })
  autotrack: CriticalityEnum;
}
