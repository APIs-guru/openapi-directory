import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAccountHealthResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricsAnalyzed" })
  metricsAnalyzed: number;

  @Metadata({ data: "json, name=OpenProactiveInsights" })
  openProactiveInsights: number;

  @Metadata({ data: "json, name=OpenReactiveInsights" })
  openReactiveInsights: number;

  @Metadata({ data: "json, name=ResourceHours" })
  resourceHours: number;
}
