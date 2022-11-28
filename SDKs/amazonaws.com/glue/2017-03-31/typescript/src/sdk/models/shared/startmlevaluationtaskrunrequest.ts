import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartMlEvaluationTaskRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId: string;
}
