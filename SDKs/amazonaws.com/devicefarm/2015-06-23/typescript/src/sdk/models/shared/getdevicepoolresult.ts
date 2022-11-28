import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevicePool } from "./devicepool";



// GetDevicePoolResult
/** 
 * Represents the result of a get device pool request.
**/
export class GetDevicePoolResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePool" })
  devicePool?: DevicePool;
}
