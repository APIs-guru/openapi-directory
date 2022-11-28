import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProactiveAnomalySummary } from "./proactiveanomalysummary";
import { ReactiveAnomalySummary } from "./reactiveanomalysummary";



export class ListAnomaliesForInsightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProactiveAnomalies", elemType: ProactiveAnomalySummary })
  proactiveAnomalies?: ProactiveAnomalySummary[];

  @SpeakeasyMetadata({ data: "json, name=ReactiveAnomalies", elemType: ReactiveAnomalySummary })
  reactiveAnomalies?: ReactiveAnomalySummary[];
}
