import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAggregationSource } from "./accountaggregationsource";
import { OrganizationAggregationSource } from "./organizationaggregationsource";
import { Tag } from "./tag";
export declare class PutConfigurationAggregatorRequest extends SpeakeasyBase {
    accountAggregationSources?: AccountAggregationSource[];
    configurationAggregatorName: string;
    organizationAggregationSource?: OrganizationAggregationSource;
    tags?: Tag[];
}
