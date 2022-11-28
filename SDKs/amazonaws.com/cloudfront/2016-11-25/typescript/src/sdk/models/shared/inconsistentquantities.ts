import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InconsistentQuantities
/** 
 * The value of <code>Quantity</code> and the size of <code>Items</code> do not match.
**/
export class InconsistentQuantities extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
