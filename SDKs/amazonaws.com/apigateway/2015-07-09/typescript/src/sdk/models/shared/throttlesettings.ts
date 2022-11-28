import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThrottleSettings
/** 
 *  The API request rate limits.
**/
export class ThrottleSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=burstLimit" })
  burstLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=rateLimit" })
  rateLimit?: number;
}
