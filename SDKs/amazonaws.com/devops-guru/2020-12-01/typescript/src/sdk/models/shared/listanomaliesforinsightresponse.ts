import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProactiveAnomalySummary } from "./proactiveanomalysummary";
import { ReactiveAnomalySummary } from "./reactiveanomalysummary";


export class ListAnomaliesForInsightResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProactiveAnomalies", elemType: shared.ProactiveAnomalySummary })
  proactiveAnomalies?: ProactiveAnomalySummary[];

  @Metadata({ data: "json, name=ReactiveAnomalies", elemType: shared.ReactiveAnomalySummary })
  reactiveAnomalies?: ReactiveAnomalySummary[];
}
