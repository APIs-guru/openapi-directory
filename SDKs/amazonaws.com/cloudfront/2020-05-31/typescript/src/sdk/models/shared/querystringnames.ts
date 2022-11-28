import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryStringNames
/** 
 * Contains a list of query string names.
**/
export class QueryStringNames extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}
