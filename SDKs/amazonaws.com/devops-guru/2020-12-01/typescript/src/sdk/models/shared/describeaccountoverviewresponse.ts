import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAccountOverviewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MeanTimeToRecoverInMilliseconds" })
  meanTimeToRecoverInMilliseconds: number;

  @Metadata({ data: "json, name=ProactiveInsights" })
  proactiveInsights: number;

  @Metadata({ data: "json, name=ReactiveInsights" })
  reactiveInsights: number;
}
