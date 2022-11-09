import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InfrastructureConfigurationSummary } from "./infrastructureconfigurationsummary";


export class ListInfrastructureConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=infrastructureConfigurationSummaryList", elemType: shared.InfrastructureConfigurationSummary })
  infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
