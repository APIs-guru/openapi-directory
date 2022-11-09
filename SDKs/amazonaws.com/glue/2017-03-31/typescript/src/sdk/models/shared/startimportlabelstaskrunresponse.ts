import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartImportLabelsTaskRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TaskRunId" })
  taskRunId?: string;
}
