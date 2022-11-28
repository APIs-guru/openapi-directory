import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationAggregator } from "./configurationaggregator";



export class PutConfigurationAggregatorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregator" })
  configurationAggregator?: ConfigurationAggregator;
}
