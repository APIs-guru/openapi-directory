import { SpeakeasyBase } from "../../../internal/utils";
import { MetricGranularityType } from "./metricgranularitytype";
import { MetricCollectionType } from "./metriccollectiontype";
export declare class DescribeMetricCollectionTypesAnswer extends SpeakeasyBase {
    granularities?: MetricGranularityType[];
    metrics?: MetricCollectionType[];
}
