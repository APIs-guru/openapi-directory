import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskSchedule } from "./taskschedule";
import { TaskStatusEnum } from "./taskstatusenum";



// DescribeTaskResponse
/** 
 * DescribeTaskResponse
**/
export class DescribeTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogGroupArn" })
  cloudWatchLogGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CurrentTaskExecutionArn" })
  currentTaskExecutionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationLocationArn" })
  destinationLocationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationNetworkInterfaceArns" })
  destinationNetworkInterfaceArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorDetail" })
  errorDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=Excludes", elemType: FilterRule })
  excludes?: FilterRule[];

  @SpeakeasyMetadata({ data: "json, name=Includes", elemType: FilterRule })
  includes?: FilterRule[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: Options;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: TaskSchedule;

  @SpeakeasyMetadata({ data: "json, name=SourceLocationArn" })
  sourceLocationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceNetworkInterfaceArns" })
  sourceNetworkInterfaceArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TaskArn" })
  taskArn?: string;
}
