import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlarmSummary } from "./alarmsummary";


export class ListAlarmsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmSummaries", elemType: shared.AlarmSummary })
  alarmSummaries?: AlarmSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
