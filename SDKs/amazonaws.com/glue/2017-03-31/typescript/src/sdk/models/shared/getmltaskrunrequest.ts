import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMlTaskRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskRunId" })
  taskRunId: string;

  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId: string;
}
