import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingConfigurationSummary } from "./autoscalingconfigurationsummary";
export declare class ListAutoScalingConfigurationsResponse extends SpeakeasyBase {
    autoScalingConfigurationSummaryList: AutoScalingConfigurationSummary[];
    nextToken?: string;
}
