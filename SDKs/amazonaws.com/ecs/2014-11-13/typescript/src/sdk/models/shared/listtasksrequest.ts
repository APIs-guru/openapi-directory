import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DesiredStatusEnum } from "./desiredstatusenum";
import { LaunchTypeEnum } from "./launchtypeenum";


export class ListTasksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=containerInstance" })
  containerInstance?: string;

  @Metadata({ data: "json, name=desiredStatus" })
  desiredStatus?: DesiredStatusEnum;

  @Metadata({ data: "json, name=family" })
  family?: string;

  @Metadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=startedBy" })
  startedBy?: string;
}
