import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskFieldEnum } from "./taskfieldenum";



export class DescribeTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: TaskFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=tasks" })
  tasks: string[];
}
