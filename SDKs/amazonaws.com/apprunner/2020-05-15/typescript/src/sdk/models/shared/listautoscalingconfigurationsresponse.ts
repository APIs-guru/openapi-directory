import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingConfigurationSummary } from "./autoscalingconfigurationsummary";



export class ListAutoScalingConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingConfigurationSummaryList", elemType: AutoScalingConfigurationSummary })
  autoScalingConfigurationSummaryList: AutoScalingConfigurationSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
