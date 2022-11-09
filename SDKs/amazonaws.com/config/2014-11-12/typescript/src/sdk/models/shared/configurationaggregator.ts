import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountAggregationSource } from "./accountaggregationsource";
import { OrganizationAggregationSource } from "./organizationaggregationsource";


// ConfigurationAggregator
/** 
 * The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. 
**/
export class ConfigurationAggregator extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountAggregationSources", elemType: shared.AccountAggregationSource })
  accountAggregationSources?: AccountAggregationSource[];

  @Metadata({ data: "json, name=ConfigurationAggregatorArn" })
  configurationAggregatorArn?: string;

  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName?: string;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=OrganizationAggregationSource" })
  organizationAggregationSource?: OrganizationAggregationSource;
}
