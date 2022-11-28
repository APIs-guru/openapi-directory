import { SpeakeasyBase } from "../../../internal/utils";
import { ProactiveAnomalySummary } from "./proactiveanomalysummary";
import { ReactiveAnomalySummary } from "./reactiveanomalysummary";
export declare class ListAnomaliesForInsightResponse extends SpeakeasyBase {
    nextToken?: string;
    proactiveAnomalies?: ProactiveAnomalySummary[];
    reactiveAnomalies?: ReactiveAnomalySummary[];
}
