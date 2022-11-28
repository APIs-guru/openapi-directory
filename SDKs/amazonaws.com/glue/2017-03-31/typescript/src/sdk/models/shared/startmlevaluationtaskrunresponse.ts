import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartMlEvaluationTaskRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskRunId" })
  taskRunId?: string;
}
