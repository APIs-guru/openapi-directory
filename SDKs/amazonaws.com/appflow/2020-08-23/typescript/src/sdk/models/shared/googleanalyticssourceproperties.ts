import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsSourceProperties
/** 
 *  The properties that are applied when Google Analytics is being used as a source. 
**/
export class GoogleAnalyticsSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
