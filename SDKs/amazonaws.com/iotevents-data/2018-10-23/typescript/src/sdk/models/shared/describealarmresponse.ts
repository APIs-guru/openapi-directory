import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Alarm } from "./alarm";


export class DescribeAlarmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarm" })
  alarm?: Alarm;
}
