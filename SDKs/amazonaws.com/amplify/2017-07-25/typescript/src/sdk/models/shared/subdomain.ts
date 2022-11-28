import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubDomainSetting } from "./subdomainsetting";



// SubDomain
/** 
 *  The subdomain for the domain association. 
**/
export class SubDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsRecord" })
  dnsRecord: string;

  @SpeakeasyMetadata({ data: "json, name=subDomainSetting" })
  subDomainSetting: SubDomainSetting;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified: boolean;
}
