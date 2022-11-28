import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyDomainIdentityResponse
/** 
 * Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.
**/
export class VerifyDomainIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  verificationToken: string;
}
