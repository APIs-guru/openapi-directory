import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";



// DeleteIndexFieldResponse
/** 
 * A response message that contains the status of a deleted index field.
**/
export class DeleteIndexFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  indexField: IndexFieldStatus;
}
