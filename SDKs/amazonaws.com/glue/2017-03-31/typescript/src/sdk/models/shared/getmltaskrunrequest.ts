import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMlTaskRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TaskRunId" })
  taskRunId: string;

  @Metadata({ data: "json, name=TransformId" })
  transformId: string;
}
