import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexField } from "./indexfield";
import { OptionStatus } from "./optionstatus";



// IndexFieldStatus
/** 
 * The value of an <code>IndexField</code> and its current status.
**/
export class IndexFieldStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: IndexField;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
