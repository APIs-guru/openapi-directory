import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAggregationSource } from "./accountaggregationsource";
import { OrganizationAggregationSource } from "./organizationaggregationsource";
import { Tag } from "./tag";



export class PutConfigurationAggregatorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountAggregationSources", elemType: AccountAggregationSource })
  accountAggregationSources?: AccountAggregationSource[];

  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationAggregationSource" })
  organizationAggregationSource?: OrganizationAggregationSource;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
