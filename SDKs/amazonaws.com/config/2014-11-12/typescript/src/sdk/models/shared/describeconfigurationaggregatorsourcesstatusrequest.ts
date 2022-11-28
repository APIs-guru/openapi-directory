import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregatedSourceStatusTypeEnum } from "./aggregatedsourcestatustypeenum";



export class DescribeConfigurationAggregatorSourcesStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateStatus" })
  updateStatus?: AggregatedSourceStatusTypeEnum[];
}
