import { SpeakeasyBase } from "../../../internal/utils";
import { DomainNameConfiguration } from "./domainnameconfiguration";
import { MutualTlsAuthentication } from "./mutualtlsauthentication";
/**
 * Represents a domain name.
**/
export declare class DomainName extends SpeakeasyBase {
    apiMappingSelectionExpression?: string;
    domainName: string;
    domainNameConfigurations?: DomainNameConfiguration[];
    mutualTlsAuthentication?: MutualTlsAuthentication;
    tags?: Map<string, string>;
}
