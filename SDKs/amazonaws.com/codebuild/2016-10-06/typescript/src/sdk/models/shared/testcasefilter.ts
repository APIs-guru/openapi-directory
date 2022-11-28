import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestCaseFilter
/** 
 * A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties.
**/
export class TestCaseFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
