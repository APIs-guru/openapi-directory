import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyCookieNamesInWhiteList
/** 
 * Your request contains more cookie names in the whitelist than are allowed per cache behavior.
**/
export class TooManyCookieNamesInWhiteList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
