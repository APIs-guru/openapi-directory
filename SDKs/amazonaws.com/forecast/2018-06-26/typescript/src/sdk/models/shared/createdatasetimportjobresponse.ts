import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDatasetImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetImportJobArn" })
  datasetImportJobArn?: string;
}
