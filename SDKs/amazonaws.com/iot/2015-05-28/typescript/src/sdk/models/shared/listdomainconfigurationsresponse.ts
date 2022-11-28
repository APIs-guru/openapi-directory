import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainConfigurationSummary } from "./domainconfigurationsummary";



export class ListDomainConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainConfigurations", elemType: DomainConfigurationSummary })
  domainConfigurations?: DomainConfigurationSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextMarker" })
  nextMarker?: string;
}
