import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceFilter } from "./devicefilter";



// DeviceSelectionConfiguration
/** 
 * Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.
**/
export class DeviceSelectionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: DeviceFilter })
  filters: DeviceFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxDevices" })
  maxDevices: number;
}
