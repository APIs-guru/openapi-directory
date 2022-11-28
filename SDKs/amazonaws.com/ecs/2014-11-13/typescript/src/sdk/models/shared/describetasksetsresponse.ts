import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { TaskSet } from "./taskset";



export class DescribeTaskSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failures", elemType: Failure })
  failures?: Failure[];

  @SpeakeasyMetadata({ data: "json, name=taskSets", elemType: TaskSet })
  taskSets?: TaskSet[];
}
