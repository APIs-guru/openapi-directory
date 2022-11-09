import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorOperator } from "./connectoroperator";
import { TaskTypeEnum } from "./tasktypeenum";


// Task
/** 
 * A class for modeling different type of tasks. Task implementation varies based on the TaskType.
**/
export class Task extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectorOperator" })
  connectorOperator?: ConnectorOperator;

  @Metadata({ data: "json, name=DestinationField" })
  destinationField?: string;

  @Metadata({ data: "json, name=SourceFields" })
  sourceFields: string[];

  @Metadata({ data: "json, name=TaskProperties" })
  taskProperties?: Map<string, string>;

  @Metadata({ data: "json, name=TaskType" })
  taskType: TaskTypeEnum;
}
