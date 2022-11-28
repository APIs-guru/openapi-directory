import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProactiveInsightSummary } from "./proactiveinsightsummary";
import { ReactiveInsightSummary } from "./reactiveinsightsummary";



export class SearchInsightsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProactiveInsights", elemType: ProactiveInsightSummary })
  proactiveInsights?: ProactiveInsightSummary[];

  @SpeakeasyMetadata({ data: "json, name=ReactiveInsights", elemType: ReactiveInsightSummary })
  reactiveInsights?: ReactiveInsightSummary[];
}
