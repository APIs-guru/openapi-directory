import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DevicePool } from "./devicepool";


// CreateDevicePoolResult
/** 
 * Represents the result of a create device pool request.
**/
export class CreateDevicePoolResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePool" })
  devicePool?: DevicePool;
}
