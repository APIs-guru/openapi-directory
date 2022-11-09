import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProactiveInsightSummary } from "./proactiveinsightsummary";
import { ReactiveInsightSummary } from "./reactiveinsightsummary";


export class ListInsightsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProactiveInsights", elemType: shared.ProactiveInsightSummary })
  proactiveInsights?: ProactiveInsightSummary[];

  @Metadata({ data: "json, name=ReactiveInsights", elemType: shared.ReactiveInsightSummary })
  reactiveInsights?: ReactiveInsightSummary[];
}
