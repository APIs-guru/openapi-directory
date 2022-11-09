import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartMlEvaluationTaskRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TransformId" })
  transformId: string;
}
