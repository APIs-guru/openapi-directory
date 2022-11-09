import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BaseConfigurationItem } from "./baseconfigurationitem";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";


export class BatchGetAggregateResourceConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseConfigurationItems", elemType: shared.BaseConfigurationItem })
  baseConfigurationItems?: BaseConfigurationItem[];

  @Metadata({ data: "json, name=UnprocessedResourceIdentifiers", elemType: shared.AggregateResourceIdentifier })
  unprocessedResourceIdentifiers?: AggregateResourceIdentifier[];
}
