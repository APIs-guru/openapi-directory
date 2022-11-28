import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";



// DefaultSearchFieldStatus
/** 
 * The value of the <code>DefaultSearchField</code> configured for this search domain and its current status.
**/
export class DefaultSearchFieldStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: string;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
