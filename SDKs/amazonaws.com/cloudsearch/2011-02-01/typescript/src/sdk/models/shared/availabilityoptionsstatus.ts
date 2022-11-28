import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";



// AvailabilityOptionsStatus
/** 
 * The status and configuration of the domain's availability options.
**/
export class AvailabilityOptionsStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: boolean;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
