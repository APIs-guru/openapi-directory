import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DevicePoolCompatibilityResult } from "./devicepoolcompatibilityresult";
import { DevicePoolCompatibilityResult } from "./devicepoolcompatibilityresult";


// GetDevicePoolCompatibilityResult
/** 
 * Represents the result of describe device pool compatibility request.
**/
export class GetDevicePoolCompatibilityResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibleDevices", elemType: shared.DevicePoolCompatibilityResult })
  compatibleDevices?: DevicePoolCompatibilityResult[];

  @Metadata({ data: "json, name=incompatibleDevices", elemType: shared.DevicePoolCompatibilityResult })
  incompatibleDevices?: DevicePoolCompatibilityResult[];
}
