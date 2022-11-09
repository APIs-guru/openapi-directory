import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopLoggingRequest
/** 
 * Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account.
**/
export class StopLoggingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
