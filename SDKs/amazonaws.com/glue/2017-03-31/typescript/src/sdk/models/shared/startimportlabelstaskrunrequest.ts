import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartImportLabelsTaskRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputS3Path" })
  inputS3Path: string;

  @Metadata({ data: "json, name=ReplaceAllLabels" })
  replaceAllLabels?: boolean;

  @Metadata({ data: "json, name=TransformId" })
  transformId: string;
}
