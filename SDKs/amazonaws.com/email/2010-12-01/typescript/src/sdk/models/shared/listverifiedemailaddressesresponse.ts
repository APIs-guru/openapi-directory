import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListVerifiedEmailAddressesResponse
/** 
 * A list of email addresses that you have verified with Amazon SES under your AWS account.
**/
export class ListVerifiedEmailAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  verifiedEmailAddresses?: string[];
}
