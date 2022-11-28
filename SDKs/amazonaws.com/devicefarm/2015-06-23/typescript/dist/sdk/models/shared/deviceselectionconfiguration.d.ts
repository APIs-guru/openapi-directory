import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceFilter } from "./devicefilter";
/**
 * Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.
**/
export declare class DeviceSelectionConfiguration extends SpeakeasyBase {
    filters: DeviceFilter[];
    maxDevices: number;
}
