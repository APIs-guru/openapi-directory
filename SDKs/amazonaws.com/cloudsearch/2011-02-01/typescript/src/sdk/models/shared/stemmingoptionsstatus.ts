import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";



// StemmingOptionsStatus
/** 
 * The stemming options configured for this search domain and the current status of those options.
**/
export class StemmingOptionsStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: string;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
