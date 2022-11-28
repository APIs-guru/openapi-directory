import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartImportLabelsTaskRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskRunId" })
  taskRunId?: string;
}
