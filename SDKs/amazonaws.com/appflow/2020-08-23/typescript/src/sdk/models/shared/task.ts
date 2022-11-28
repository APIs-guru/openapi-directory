import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOperator } from "./connectoroperator";
import { TaskTypeEnum } from "./tasktypeenum";



// Task
/** 
 *  A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>. 
**/
export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorOperator" })
  connectorOperator?: ConnectorOperator;

  @SpeakeasyMetadata({ data: "json, name=destinationField" })
  destinationField?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceFields" })
  sourceFields: string[];

  @SpeakeasyMetadata({ data: "json, name=taskProperties" })
  taskProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=taskType" })
  taskType: TaskTypeEnum;
}
