import { SpeakeasyBase } from "../../../internal/utils";
import { SubDomainSetting } from "./subdomainsetting";
/**
 *  The subdomain for the domain association.
**/
export declare class SubDomain extends SpeakeasyBase {
    dnsRecord: string;
    subDomainSetting: SubDomainSetting;
    verified: boolean;
}
