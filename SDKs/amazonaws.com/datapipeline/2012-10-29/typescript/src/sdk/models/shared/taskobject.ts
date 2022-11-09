import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineObject } from "./pipelineobject";


// TaskObject
/** 
 * Contains information about a pipeline task that is assigned to a task runner.
**/
export class TaskObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=attemptId" })
  attemptId?: string;

  @Metadata({ data: "json, name=objects", elemType: shared.PipelineObject })
  objects?: Map<string, PipelineObject>;

  @Metadata({ data: "json, name=pipelineId" })
  pipelineId?: string;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
