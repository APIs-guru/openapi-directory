import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultSearchFieldStatus } from "./defaultsearchfieldstatus";



// DescribeDefaultSearchFieldResponse
/** 
 * A response message that contains the default search field for a search domain.
**/
export class DescribeDefaultSearchFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultSearchField: DefaultSearchFieldStatus;
}
