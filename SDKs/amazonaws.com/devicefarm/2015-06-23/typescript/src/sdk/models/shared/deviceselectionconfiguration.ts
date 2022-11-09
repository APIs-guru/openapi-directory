import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceFilter } from "./devicefilter";


// DeviceSelectionConfiguration
/** 
 * Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.
**/
export class DeviceSelectionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.DeviceFilter })
  filters: DeviceFilter[];

  @Metadata({ data: "json, name=maxDevices" })
  maxDevices: number;
}
