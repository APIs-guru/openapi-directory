import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Position
/** 
 * <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p>
**/
export class Position extends SpeakeasyBase {
  @SpeakeasyMetadata()
  column?: number;

  @SpeakeasyMetadata()
  line?: number;
}
