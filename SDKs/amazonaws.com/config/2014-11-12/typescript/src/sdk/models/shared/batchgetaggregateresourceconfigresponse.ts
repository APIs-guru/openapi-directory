import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseConfigurationItem } from "./baseconfigurationitem";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";



export class BatchGetAggregateResourceConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseConfigurationItems", elemType: BaseConfigurationItem })
  baseConfigurationItems?: BaseConfigurationItem[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedResourceIdentifiers", elemType: AggregateResourceIdentifier })
  unprocessedResourceIdentifiers?: AggregateResourceIdentifier[];
}
