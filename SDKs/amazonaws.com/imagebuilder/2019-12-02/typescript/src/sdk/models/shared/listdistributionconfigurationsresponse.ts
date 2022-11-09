import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DistributionConfigurationSummary } from "./distributionconfigurationsummary";


export class ListDistributionConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributionConfigurationSummaryList", elemType: shared.DistributionConfigurationSummary })
  distributionConfigurationSummaryList?: DistributionConfigurationSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
