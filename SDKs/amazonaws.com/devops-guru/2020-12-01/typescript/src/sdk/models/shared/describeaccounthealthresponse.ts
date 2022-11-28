import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAccountHealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricsAnalyzed" })
  metricsAnalyzed: number;

  @SpeakeasyMetadata({ data: "json, name=OpenProactiveInsights" })
  openProactiveInsights: number;

  @SpeakeasyMetadata({ data: "json, name=OpenReactiveInsights" })
  openReactiveInsights: number;

  @SpeakeasyMetadata({ data: "json, name=ResourceHours" })
  resourceHours: number;
}
