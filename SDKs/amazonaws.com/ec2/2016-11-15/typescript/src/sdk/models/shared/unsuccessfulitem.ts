import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulItemError } from "./unsuccessfulitemerror";



// UnsuccessfulItem
/** 
 * Information about items that were not successfully processed in a batch call.
**/
export class UnsuccessfulItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  error?: UnsuccessfulItemError;

  @SpeakeasyMetadata()
  resourceId?: string;
}
