import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";



// DescribeIndexFieldsResponse
/** 
 * A response message that contains the index fields for a search domain.
**/
export class DescribeIndexFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IndexFieldStatus })
  indexFields: IndexFieldStatus[];
}
