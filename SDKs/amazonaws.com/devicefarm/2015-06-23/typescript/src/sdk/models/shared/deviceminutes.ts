import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceMinutes
/** 
 * Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.
**/
export class DeviceMinutes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metered" })
  metered?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=unmetered" })
  unmetered?: number;
}
