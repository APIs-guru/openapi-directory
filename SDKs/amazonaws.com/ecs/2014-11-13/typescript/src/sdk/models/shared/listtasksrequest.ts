import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DesiredStatusEnum } from "./desiredstatusenum";
import { LaunchTypeEnum } from "./launchtypeenum";



export class ListTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=containerInstance" })
  containerInstance?: string;

  @SpeakeasyMetadata({ data: "json, name=desiredStatus" })
  desiredStatus?: DesiredStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=startedBy" })
  startedBy?: string;
}
