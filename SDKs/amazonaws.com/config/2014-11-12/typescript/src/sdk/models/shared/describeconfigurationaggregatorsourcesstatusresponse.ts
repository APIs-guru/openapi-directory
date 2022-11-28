import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregatedSourceStatus } from "./aggregatedsourcestatus";



export class DescribeConfigurationAggregatorSourcesStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregatedSourceStatusList", elemType: AggregatedSourceStatus })
  aggregatedSourceStatusList?: AggregatedSourceStatus[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
