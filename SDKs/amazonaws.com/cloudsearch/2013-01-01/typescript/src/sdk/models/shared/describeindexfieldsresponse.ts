import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";



// DescribeIndexFieldsResponse
/** 
 * The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.
**/
export class DescribeIndexFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IndexFieldStatus })
  indexFields: IndexFieldStatus[];
}
