import { SpeakeasyBase } from "../../../internal/utils";
import { ProactiveInsightSummary } from "./proactiveinsightsummary";
import { ReactiveInsightSummary } from "./reactiveinsightsummary";
export declare class ListInsightsResponse extends SpeakeasyBase {
    nextToken?: string;
    proactiveInsights?: ProactiveInsightSummary[];
    reactiveInsights?: ReactiveInsightSummary[];
}
