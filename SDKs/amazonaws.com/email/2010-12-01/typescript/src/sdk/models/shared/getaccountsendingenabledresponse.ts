import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetAccountSendingEnabledResponse
/** 
 * Represents a request to return the email sending status for your Amazon SES account in the current AWS Region.
**/
export class GetAccountSendingEnabledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: boolean;
}
