import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartExportLabelsTaskRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskRunId" })
  taskRunId?: string;
}
