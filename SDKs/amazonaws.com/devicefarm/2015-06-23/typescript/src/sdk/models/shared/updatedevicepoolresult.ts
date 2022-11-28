import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevicePool } from "./devicepool";



// UpdateDevicePoolResult
/** 
 * Represents the result of an update device pool request.
**/
export class UpdateDevicePoolResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePool" })
  devicePool?: DevicePool;
}
