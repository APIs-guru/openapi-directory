import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskFilterNameEnum } from "./taskfilternameenum";
import { OperatorEnum } from "./operatorenum";



// TaskFilter
/** 
 * You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.
**/
export class TaskFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: TaskFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Operator" })
  operator: OperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
