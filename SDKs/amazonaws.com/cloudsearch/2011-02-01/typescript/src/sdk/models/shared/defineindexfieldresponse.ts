import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";



// DefineIndexFieldResponse
/** 
 * A response message that contains the status of an updated index field.
**/
export class DefineIndexFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  indexField: IndexFieldStatus;
}
