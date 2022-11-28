import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { Task } from "./task";



export class DescribeTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failures", elemType: Failure })
  failures?: Failure[];

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: Task })
  tasks?: Task[];
}
