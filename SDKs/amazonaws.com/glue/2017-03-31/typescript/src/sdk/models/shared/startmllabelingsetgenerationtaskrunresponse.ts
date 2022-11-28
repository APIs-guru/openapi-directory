import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartMlLabelingSetGenerationTaskRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskRunId" })
  taskRunId?: string;
}
