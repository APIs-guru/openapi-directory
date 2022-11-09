import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";


export class CancelMlTaskRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: TaskStatusTypeEnum;

  @Metadata({ data: "json, name=TaskRunId" })
  taskRunId?: string;

  @Metadata({ data: "json, name=TransformId" })
  transformId?: string;
}
