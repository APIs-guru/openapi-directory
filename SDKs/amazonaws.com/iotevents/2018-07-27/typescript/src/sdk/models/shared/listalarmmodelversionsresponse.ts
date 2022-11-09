import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlarmModelVersionSummary } from "./alarmmodelversionsummary";


export class ListAlarmModelVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelVersionSummaries", elemType: shared.AlarmModelVersionSummary })
  alarmModelVersionSummaries?: AlarmModelVersionSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
