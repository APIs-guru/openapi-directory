import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES.
**/
export declare class VerifyDomainDkimResponse extends SpeakeasyBase {
    dkimTokens: string[];
}
