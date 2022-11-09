import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregatedSourceStatus } from "./aggregatedsourcestatus";


export class DescribeConfigurationAggregatorSourcesStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregatedSourceStatusList", elemType: shared.AggregatedSourceStatus })
  aggregatedSourceStatusList?: AggregatedSourceStatus[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
