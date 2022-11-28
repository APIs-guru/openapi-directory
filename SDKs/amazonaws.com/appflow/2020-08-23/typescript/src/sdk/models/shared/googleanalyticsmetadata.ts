import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsMetadata
/** 
 *  The connector metadata specific to Google Analytics. 
**/
export class GoogleAnalyticsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oAuthScopes" })
  oAuthScopes?: string[];
}
