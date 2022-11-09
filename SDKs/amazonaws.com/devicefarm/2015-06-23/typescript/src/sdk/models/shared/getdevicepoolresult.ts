import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DevicePool } from "./devicepool";


// GetDevicePoolResult
/** 
 * Represents the result of a get device pool request.
**/
export class GetDevicePoolResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePool" })
  devicePool?: DevicePool;
}
