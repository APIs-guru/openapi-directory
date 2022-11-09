import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDatasetImportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetImportJobArn" })
  datasetImportJobArn: string;
}
