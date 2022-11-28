import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineObject } from "./pipelineobject";



// TaskObject
/** 
 * Contains information about a pipeline task that is assigned to a task runner.
**/
export class TaskObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attemptId" })
  attemptId?: string;

  @SpeakeasyMetadata({ data: "json, name=objects", elemType: PipelineObject })
  objects?: Map<string, PipelineObject>;

  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
