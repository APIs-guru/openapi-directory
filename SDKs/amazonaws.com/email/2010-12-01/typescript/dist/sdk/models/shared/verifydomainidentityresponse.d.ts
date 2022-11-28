import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.
**/
export declare class VerifyDomainIdentityResponse extends SpeakeasyBase {
    verificationToken: string;
}
