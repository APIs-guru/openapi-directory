import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSetFieldEnum } from "./tasksetfieldenum";
export declare class DescribeTaskSetsRequest extends SpeakeasyBase {
    cluster: string;
    include?: TaskSetFieldEnum[];
    service: string;
    taskSets?: string[];
}
