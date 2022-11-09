import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmModelSummary } from "./alarmmodelsummary";
export declare class ListAlarmModelsResponse extends SpeakeasyBase {
    alarmModelSummaries?: AlarmModelSummary[];
    nextToken?: string;
}
