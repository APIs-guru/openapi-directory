import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainConfigurationSummary } from "./domainconfigurationsummary";


export class ListDomainConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainConfigurations", elemType: shared.DomainConfigurationSummary })
  domainConfigurations?: DomainConfigurationSummary[];

  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;
}
