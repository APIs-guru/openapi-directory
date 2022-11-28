import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceFilter } from "./devicefilter";
/**
 * Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.
**/
export declare class DeviceSelectionResult extends SpeakeasyBase {
    filters?: DeviceFilter[];
    matchedDevicesCount?: number;
    maxDevices?: number;
}
