import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationAggregator } from "./configurationaggregator";



export class DescribeConfigurationAggregatorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregators", elemType: ConfigurationAggregator })
  configurationAggregators?: ConfigurationAggregator[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
