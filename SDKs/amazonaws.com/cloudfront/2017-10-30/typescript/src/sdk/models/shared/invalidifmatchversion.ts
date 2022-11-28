import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidIfMatchVersion
/** 
 * The <code>If-Match</code> version is missing or not valid for the distribution.
**/
export class InvalidIfMatchVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
