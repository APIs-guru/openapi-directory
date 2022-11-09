import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorOperator } from "./connectoroperator";
import { TaskTypeEnum } from "./tasktypeenum";


// Task
/** 
 *  A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>. 
**/
export class Task extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorOperator" })
  connectorOperator?: ConnectorOperator;

  @Metadata({ data: "json, name=destinationField" })
  destinationField?: string;

  @Metadata({ data: "json, name=sourceFields" })
  sourceFields: string[];

  @Metadata({ data: "json, name=taskProperties" })
  taskProperties?: Map<string, string>;

  @Metadata({ data: "json, name=taskType" })
  taskType: TaskTypeEnum;
}
