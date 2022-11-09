import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeConfigurationAggregatorsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregatorNames" })
  configurationAggregatorNames?: string[];

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
