import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Suggester } from "./suggester";
import { OptionStatus } from "./optionstatus";



// SuggesterStatus
/** 
 * The value of a <code>Suggester</code> and its current status.
**/
export class SuggesterStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: Suggester;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
