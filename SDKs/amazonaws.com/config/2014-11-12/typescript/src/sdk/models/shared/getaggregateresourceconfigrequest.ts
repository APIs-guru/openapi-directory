import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";


export class GetAggregateResourceConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @Metadata({ data: "json, name=ResourceIdentifier" })
  resourceIdentifier: AggregateResourceIdentifier;
}
