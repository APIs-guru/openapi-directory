import { SpeakeasyBase } from "../../../internal/utils";
import { DomainNameConfiguration } from "./domainnameconfiguration";
import { MutualTlsAuthentication } from "./mutualtlsauthentication";
export declare class GetDomainNameResponse extends SpeakeasyBase {
    apiMappingSelectionExpression?: string;
    domainName?: string;
    domainNameConfigurations?: DomainNameConfiguration[];
    mutualTlsAuthentication?: MutualTlsAuthentication;
    tags?: Map<string, string>;
}
