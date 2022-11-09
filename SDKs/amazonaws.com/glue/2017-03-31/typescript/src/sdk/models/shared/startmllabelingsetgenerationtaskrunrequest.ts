import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartMlLabelingSetGenerationTaskRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OutputS3Path" })
  outputS3Path: string;

  @Metadata({ data: "json, name=TransformId" })
  transformId: string;
}
