import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeoutConfig
/** 
 * Tunnel timeout configuration.
**/
export class TimeoutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxLifetimeTimeoutMinutes" })
  maxLifetimeTimeoutMinutes?: number;
}
