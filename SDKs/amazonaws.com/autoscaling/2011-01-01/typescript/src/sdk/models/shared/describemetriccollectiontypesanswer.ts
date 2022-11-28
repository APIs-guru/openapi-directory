import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricGranularityType } from "./metricgranularitytype";
import { MetricCollectionType } from "./metriccollectiontype";



export class DescribeMetricCollectionTypesAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MetricGranularityType })
  granularities?: MetricGranularityType[];

  @SpeakeasyMetadata({ elemType: MetricCollectionType })
  metrics?: MetricCollectionType[];
}
