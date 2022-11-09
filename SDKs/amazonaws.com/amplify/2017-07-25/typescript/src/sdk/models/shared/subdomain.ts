import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubDomainSetting } from "./subdomainsetting";


// SubDomain
/** 
 *  The subdomain for the domain association. 
**/
export class SubDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=dnsRecord" })
  dnsRecord: string;

  @Metadata({ data: "json, name=subDomainSetting" })
  subDomainSetting: SubDomainSetting;

  @Metadata({ data: "json, name=verified" })
  verified: boolean;
}
