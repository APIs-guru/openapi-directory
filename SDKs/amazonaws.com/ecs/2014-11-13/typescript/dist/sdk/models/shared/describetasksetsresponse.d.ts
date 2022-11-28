import { SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { TaskSet } from "./taskset";
export declare class DescribeTaskSetsResponse extends SpeakeasyBase {
    failures?: Failure[];
    taskSets?: TaskSet[];
}
