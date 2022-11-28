import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";



// DeleteIndexFieldResponse
/** 
 * The result of a <code><a>DeleteIndexField</a></code> request.
**/
export class DeleteIndexFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  indexField: IndexFieldStatus;
}
