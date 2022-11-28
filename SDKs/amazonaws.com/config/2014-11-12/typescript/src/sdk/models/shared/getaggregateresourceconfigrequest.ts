import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";



export class GetAggregateResourceConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceIdentifier" })
  resourceIdentifier: AggregateResourceIdentifier;
}
