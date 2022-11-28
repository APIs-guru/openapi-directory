import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopLoggingRequest
/** 
 * Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account.
**/
export class StopLoggingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
