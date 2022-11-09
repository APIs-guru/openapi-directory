import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DevicePool } from "./devicepool";


// UpdateDevicePoolResult
/** 
 * Represents the result of an update device pool request.
**/
export class UpdateDevicePoolResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePool" })
  devicePool?: DevicePool;
}
