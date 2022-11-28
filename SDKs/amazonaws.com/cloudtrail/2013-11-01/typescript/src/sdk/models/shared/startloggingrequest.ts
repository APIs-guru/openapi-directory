import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartLoggingRequest
/** 
 * The request to CloudTrail to start logging Amazon Web Services API calls for an account.
**/
export class StartLoggingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
