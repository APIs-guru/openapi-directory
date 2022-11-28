import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartImportLabelsTaskRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputS3Path" })
  inputS3Path: string;

  @SpeakeasyMetadata({ data: "json, name=ReplaceAllLabels" })
  replaceAllLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId: string;
}
