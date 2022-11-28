import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";



export class DescribeAlarmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarm" })
  alarm?: Alarm;
}
