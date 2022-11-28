import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyDomainDkimResponse
/** 
 * Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES.
**/
export class VerifyDomainDkimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dkimTokens: string[];
}
