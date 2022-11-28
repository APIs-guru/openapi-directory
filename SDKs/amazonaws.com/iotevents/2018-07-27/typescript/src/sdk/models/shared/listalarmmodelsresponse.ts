import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmModelSummary } from "./alarmmodelsummary";



export class ListAlarmModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelSummaries", elemType: AlarmModelSummary })
  alarmModelSummaries?: AlarmModelSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
