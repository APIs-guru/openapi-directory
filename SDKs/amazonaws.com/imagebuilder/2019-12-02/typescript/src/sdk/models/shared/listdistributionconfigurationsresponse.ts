import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionConfigurationSummary } from "./distributionconfigurationsummary";



export class ListDistributionConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributionConfigurationSummaryList", elemType: DistributionConfigurationSummary })
  distributionConfigurationSummaryList?: DistributionConfigurationSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
