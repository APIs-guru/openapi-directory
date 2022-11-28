import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDatasetImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetImportJobArn" })
  datasetImportJobArn: string;
}
