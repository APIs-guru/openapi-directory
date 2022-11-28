import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CookieNames
/** 
 * Contains a list of cookie names.
**/
export class CookieNames extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}
