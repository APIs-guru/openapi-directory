import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";



// DefineIndexFieldResponse
/** 
 * The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.
**/
export class DefineIndexFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  indexField: IndexFieldStatus;
}
