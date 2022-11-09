import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchTypeEnum } from "./launchtypeenum";
import { SchedulingStrategyEnum } from "./schedulingstrategyenum";


export class ListServicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=schedulingStrategy" })
  schedulingStrategy?: SchedulingStrategyEnum;
}
