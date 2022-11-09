import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartExportLabelsTaskRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OutputS3Path" })
  outputS3Path: string;

  @Metadata({ data: "json, name=TransformId" })
  transformId: string;
}
