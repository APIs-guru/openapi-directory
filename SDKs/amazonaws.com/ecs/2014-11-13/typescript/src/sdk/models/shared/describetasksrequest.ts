import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskFieldEnum } from "./taskfieldenum";


export class DescribeTasksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=include" })
  include?: TaskFieldEnum[];

  @Metadata({ data: "json, name=tasks" })
  tasks: string[];
}
