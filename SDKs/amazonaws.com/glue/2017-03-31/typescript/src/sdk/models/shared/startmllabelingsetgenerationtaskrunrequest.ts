import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartMlLabelingSetGenerationTaskRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OutputS3Path" })
  outputS3Path: string;

  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId: string;
}
