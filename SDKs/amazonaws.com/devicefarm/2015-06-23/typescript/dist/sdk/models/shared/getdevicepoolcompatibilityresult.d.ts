import { SpeakeasyBase } from "../../../internal/utils";
import { DevicePoolCompatibilityResult } from "./devicepoolcompatibilityresult";
/**
 * Represents the result of describe device pool compatibility request.
**/
export declare class GetDevicePoolCompatibilityResult extends SpeakeasyBase {
    compatibleDevices?: DevicePoolCompatibilityResult[];
    incompatibleDevices?: DevicePoolCompatibilityResult[];
}
