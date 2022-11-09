import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskRunProperties } from "./taskrunproperties";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";


// TaskRun
/** 
 * The sampling parameters that are associated with the machine learning transform.
**/
export class TaskRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompletedOn" })
  completedOn?: Date;

  @Metadata({ data: "json, name=ErrorString" })
  errorString?: string;

  @Metadata({ data: "json, name=ExecutionTime" })
  executionTime?: number;

  @Metadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @Metadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: TaskRunProperties;

  @Metadata({ data: "json, name=StartedOn" })
  startedOn?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: TaskStatusTypeEnum;

  @Metadata({ data: "json, name=TaskRunId" })
  taskRunId?: string;

  @Metadata({ data: "json, name=TransformId" })
  transformId?: string;
}
