import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceMinutes
/** 
 * Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.
**/
export class DeviceMinutes extends SpeakeasyBase {
  @Metadata({ data: "json, name=metered" })
  metered?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=unmetered" })
  unmetered?: number;
}
