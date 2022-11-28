import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskRunProperties } from "./taskrunproperties";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";



// TaskRun
/** 
 * The sampling parameters that are associated with the machine learning transform.
**/
export class TaskRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompletedOn" })
  completedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=ErrorString" })
  errorString?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionTime" })
  executionTime?: number;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: TaskRunProperties;

  @SpeakeasyMetadata({ data: "json, name=StartedOn" })
  startedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TaskStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TaskRunId" })
  taskRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId?: string;
}
