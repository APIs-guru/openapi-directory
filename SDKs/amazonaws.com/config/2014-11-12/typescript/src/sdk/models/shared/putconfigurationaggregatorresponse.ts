import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationAggregator } from "./configurationaggregator";


export class PutConfigurationAggregatorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregator" })
  configurationAggregator?: ConfigurationAggregator;
}
