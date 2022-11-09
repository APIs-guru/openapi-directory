import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoScalingConfigurationSummary } from "./autoscalingconfigurationsummary";


export class ListAutoScalingConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingConfigurationSummaryList", elemType: shared.AutoScalingConfigurationSummary })
  autoScalingConfigurationSummaryList: AutoScalingConfigurationSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
