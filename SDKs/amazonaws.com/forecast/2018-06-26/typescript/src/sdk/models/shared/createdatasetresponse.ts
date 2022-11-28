import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;
}
