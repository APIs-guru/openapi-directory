import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAccountOverviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MeanTimeToRecoverInMilliseconds" })
  meanTimeToRecoverInMilliseconds: number;

  @SpeakeasyMetadata({ data: "json, name=ProactiveInsights" })
  proactiveInsights: number;

  @SpeakeasyMetadata({ data: "json, name=ReactiveInsights" })
  reactiveInsights: number;
}
