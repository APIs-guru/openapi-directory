import { SpeakeasyBase } from "../../../internal/utils";
import { InfrastructureConfigurationSummary } from "./infrastructureconfigurationsummary";
export declare class ListInfrastructureConfigurationsResponse extends SpeakeasyBase {
    infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[];
    nextToken?: string;
    requestId?: string;
}
