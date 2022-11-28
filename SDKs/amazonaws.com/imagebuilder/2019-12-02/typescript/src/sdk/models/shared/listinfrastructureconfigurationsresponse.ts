import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InfrastructureConfigurationSummary } from "./infrastructureconfigurationsummary";



export class ListInfrastructureConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infrastructureConfigurationSummaryList", elemType: InfrastructureConfigurationSummary })
  infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
