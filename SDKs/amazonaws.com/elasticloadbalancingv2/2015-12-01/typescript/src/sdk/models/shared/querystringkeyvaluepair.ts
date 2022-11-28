import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryStringKeyValuePair
/** 
 * Information about a key/value pair.
**/
export class QueryStringKeyValuePair extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}
