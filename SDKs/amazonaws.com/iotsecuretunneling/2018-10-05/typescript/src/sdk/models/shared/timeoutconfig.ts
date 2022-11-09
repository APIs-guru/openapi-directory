import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeoutConfig
/** 
 * Tunnel timeout configuration.
**/
export class TimeoutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxLifetimeTimeoutMinutes" })
  maxLifetimeTimeoutMinutes?: number;
}
