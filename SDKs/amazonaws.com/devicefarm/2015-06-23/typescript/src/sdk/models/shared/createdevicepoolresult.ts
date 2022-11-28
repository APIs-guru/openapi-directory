import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevicePool } from "./devicepool";



// CreateDevicePoolResult
/** 
 * Represents the result of a create device pool request.
**/
export class CreateDevicePoolResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePool" })
  devicePool?: DevicePool;
}
