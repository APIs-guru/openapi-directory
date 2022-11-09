import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountAggregationSource } from "./accountaggregationsource";
import { OrganizationAggregationSource } from "./organizationaggregationsource";
import { Tag } from "./tag";


export class PutConfigurationAggregatorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountAggregationSources", elemType: shared.AccountAggregationSource })
  accountAggregationSources?: AccountAggregationSource[];

  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @Metadata({ data: "json, name=OrganizationAggregationSource" })
  organizationAggregationSource?: OrganizationAggregationSource;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
