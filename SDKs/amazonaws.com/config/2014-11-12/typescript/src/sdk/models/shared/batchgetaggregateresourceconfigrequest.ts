import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";



export class BatchGetAggregateResourceConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceIdentifiers", elemType: AggregateResourceIdentifier })
  resourceIdentifiers: AggregateResourceIdentifier[];
}
