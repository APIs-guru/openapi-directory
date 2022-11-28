import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeConfigurationAggregatorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorNames" })
  configurationAggregatorNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
