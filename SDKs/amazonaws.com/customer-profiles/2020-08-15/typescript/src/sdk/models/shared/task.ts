import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOperator } from "./connectoroperator";
import { TaskTypeEnum } from "./tasktypeenum";



// Task
/** 
 * A class for modeling different type of tasks. Task implementation varies based on the TaskType.
**/
export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectorOperator" })
  connectorOperator?: ConnectorOperator;

  @SpeakeasyMetadata({ data: "json, name=DestinationField" })
  destinationField?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceFields" })
  sourceFields: string[];

  @SpeakeasyMetadata({ data: "json, name=TaskProperties" })
  taskProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TaskType" })
  taskType: TaskTypeEnum;
}
