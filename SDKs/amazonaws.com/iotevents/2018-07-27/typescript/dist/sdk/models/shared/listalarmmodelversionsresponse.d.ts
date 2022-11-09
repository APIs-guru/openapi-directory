import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmModelVersionSummary } from "./alarmmodelversionsummary";
export declare class ListAlarmModelVersionsResponse extends SpeakeasyBase {
    alarmModelVersionSummaries?: AlarmModelVersionSummary[];
    nextToken?: string;
}
