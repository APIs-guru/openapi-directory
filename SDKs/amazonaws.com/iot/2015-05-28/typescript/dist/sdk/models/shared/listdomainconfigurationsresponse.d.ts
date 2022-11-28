import { SpeakeasyBase } from "../../../internal/utils";
import { DomainConfigurationSummary } from "./domainconfigurationsummary";
export declare class ListDomainConfigurationsResponse extends SpeakeasyBase {
    domainConfigurations?: DomainConfigurationSummary[];
    nextMarker?: string;
}
