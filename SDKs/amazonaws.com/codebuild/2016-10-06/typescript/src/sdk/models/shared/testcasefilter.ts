import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestCaseFilter
/** 
 * A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties.
**/
export class TestCaseFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyword" })
  keyword?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
