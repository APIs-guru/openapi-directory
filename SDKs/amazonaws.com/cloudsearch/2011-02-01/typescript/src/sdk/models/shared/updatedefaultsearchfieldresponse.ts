import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultSearchFieldStatus } from "./defaultsearchfieldstatus";



// UpdateDefaultSearchFieldResponse
/** 
 * A response message that contains the status of an updated default search field.
**/
export class UpdateDefaultSearchFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultSearchField: DefaultSearchFieldStatus;
}
