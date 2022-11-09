import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartLoggingRequest
/** 
 * The request to CloudTrail to start logging Amazon Web Services API calls for an account.
**/
export class StartLoggingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
