import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThrottleSettings
/** 
 *  The API request rate limits.
**/
export class ThrottleSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=burstLimit" })
  burstLimit?: number;

  @Metadata({ data: "json, name=rateLimit" })
  rateLimit?: number;
}
