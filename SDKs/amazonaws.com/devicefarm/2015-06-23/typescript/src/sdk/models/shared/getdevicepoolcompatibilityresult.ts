import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevicePoolCompatibilityResult } from "./devicepoolcompatibilityresult";



// GetDevicePoolCompatibilityResult
/** 
 * Represents the result of describe device pool compatibility request.
**/
export class GetDevicePoolCompatibilityResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibleDevices", elemType: DevicePoolCompatibilityResult })
  compatibleDevices?: DevicePoolCompatibilityResult[];

  @SpeakeasyMetadata({ data: "json, name=incompatibleDevices", elemType: DevicePoolCompatibilityResult })
  incompatibleDevices?: DevicePoolCompatibilityResult[];
}
