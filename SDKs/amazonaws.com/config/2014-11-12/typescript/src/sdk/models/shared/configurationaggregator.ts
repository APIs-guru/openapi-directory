import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAggregationSource } from "./accountaggregationsource";
import { OrganizationAggregationSource } from "./organizationaggregationsource";



// ConfigurationAggregator
/** 
 * The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. 
**/
export class ConfigurationAggregator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountAggregationSources", elemType: AccountAggregationSource })
  accountAggregationSources?: AccountAggregationSource[];

  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorArn" })
  configurationAggregatorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=OrganizationAggregationSource" })
  organizationAggregationSource?: OrganizationAggregationSource;
}
