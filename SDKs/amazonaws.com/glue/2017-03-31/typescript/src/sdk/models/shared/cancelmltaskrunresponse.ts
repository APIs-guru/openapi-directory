import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";



export class CancelMlTaskRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TaskStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TaskRunId" })
  taskRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId?: string;
}
