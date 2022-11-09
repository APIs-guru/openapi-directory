import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregatedSourceStatusTypeEnum } from "./aggregatedsourcestatustypeenum";


export class DescribeConfigurationAggregatorSourcesStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UpdateStatus" })
  updateStatus?: AggregatedSourceStatusTypeEnum[];
}
