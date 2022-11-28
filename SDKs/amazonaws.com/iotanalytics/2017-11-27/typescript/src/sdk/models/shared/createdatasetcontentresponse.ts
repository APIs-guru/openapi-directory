import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDatasetContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: string;
}
