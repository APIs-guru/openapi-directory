import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlarmModelSummary } from "./alarmmodelsummary";


export class ListAlarmModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelSummaries", elemType: shared.AlarmModelSummary })
  alarmModelSummaries?: AlarmModelSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
