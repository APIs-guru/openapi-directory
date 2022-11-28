import { SpeakeasyBase } from "../../../internal/utils";
import { TaskFieldEnum } from "./taskfieldenum";
export declare class DescribeTasksRequest extends SpeakeasyBase {
    cluster?: string;
    include?: TaskFieldEnum[];
    tasks: string[];
}
