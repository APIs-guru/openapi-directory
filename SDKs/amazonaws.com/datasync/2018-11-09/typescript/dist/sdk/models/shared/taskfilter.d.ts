import { SpeakeasyBase } from "../../../internal/utils";
import { TaskFilterNameEnum } from "./taskfilternameenum";
import { OperatorEnum } from "./operatorenum";
/**
 * You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.
**/
export declare class TaskFilter extends SpeakeasyBase {
    name: TaskFilterNameEnum;
    operator: OperatorEnum;
    values: string[];
}
