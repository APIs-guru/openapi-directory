import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsSourceProperties
/** 
 *  The properties that are applied when Google Analytics is being used as a source. 
**/
export class GoogleAnalyticsSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object: string;
}
