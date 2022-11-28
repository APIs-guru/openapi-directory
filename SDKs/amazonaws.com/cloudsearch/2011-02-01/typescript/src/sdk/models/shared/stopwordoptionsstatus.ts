import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";



// StopwordOptionsStatus
/** 
 * The stopword options configured for this search domain and the current status of those options.
**/
export class StopwordOptionsStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: string;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
