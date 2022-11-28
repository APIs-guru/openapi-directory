import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceFilter } from "./devicefilter";



// DeviceSelectionResult
/** 
 * Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.
**/
export class DeviceSelectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: DeviceFilter })
  filters?: DeviceFilter[];

  @SpeakeasyMetadata({ data: "json, name=matchedDevicesCount" })
  matchedDevicesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=maxDevices" })
  maxDevices?: number;
}
