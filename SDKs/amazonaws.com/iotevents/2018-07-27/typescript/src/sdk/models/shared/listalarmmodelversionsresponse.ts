import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmModelVersionSummary } from "./alarmmodelversionsummary";



export class ListAlarmModelVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelVersionSummaries", elemType: AlarmModelVersionSummary })
  alarmModelVersionSummaries?: AlarmModelVersionSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
