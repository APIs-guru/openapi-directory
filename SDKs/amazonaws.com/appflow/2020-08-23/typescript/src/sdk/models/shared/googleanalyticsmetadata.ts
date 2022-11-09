import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsMetadata
/** 
 *  The connector metadata specific to Google Analytics. 
**/
export class GoogleAnalyticsMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=oAuthScopes" })
  oAuthScopes?: string[];
}
