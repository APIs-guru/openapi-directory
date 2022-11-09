import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartExportLabelsTaskRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TaskRunId" })
  taskRunId?: string;
}
