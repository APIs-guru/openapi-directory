import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAggregationSource } from "./accountaggregationsource";
import { OrganizationAggregationSource } from "./organizationaggregationsource";
/**
 * The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator.
**/
export declare class ConfigurationAggregator extends SpeakeasyBase {
    accountAggregationSources?: AccountAggregationSource[];
    configurationAggregatorArn?: string;
    configurationAggregatorName?: string;
    createdBy?: string;
    creationTime?: Date;
    lastUpdatedTime?: Date;
    organizationAggregationSource?: OrganizationAggregationSource;
}
