import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTypeEnum } from "./launchtypeenum";
import { SchedulingStrategyEnum } from "./schedulingstrategyenum";



export class ListServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=schedulingStrategy" })
  schedulingStrategy?: SchedulingStrategyEnum;
}
