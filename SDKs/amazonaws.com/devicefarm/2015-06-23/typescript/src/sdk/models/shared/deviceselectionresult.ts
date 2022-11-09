import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceFilter } from "./devicefilter";


// DeviceSelectionResult
/** 
 * Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.
**/
export class DeviceSelectionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.DeviceFilter })
  filters?: DeviceFilter[];

  @Metadata({ data: "json, name=matchedDevicesCount" })
  matchedDevicesCount?: number;

  @Metadata({ data: "json, name=maxDevices" })
  maxDevices?: number;
}
