import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmSummary } from "./alarmsummary";



export class ListAlarmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmSummaries", elemType: AlarmSummary })
  alarmSummaries?: AlarmSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
