import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigurationAggregator } from "./configurationaggregator";


export class DescribeConfigurationAggregatorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregators", elemType: shared.ConfigurationAggregator })
  configurationAggregators?: ConfigurationAggregator[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
