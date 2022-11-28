import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionConfigurationSummary } from "./distributionconfigurationsummary";
export declare class ListDistributionConfigurationsResponse extends SpeakeasyBase {
    distributionConfigurationSummaryList?: DistributionConfigurationSummary[];
    nextToken?: string;
    requestId?: string;
}
