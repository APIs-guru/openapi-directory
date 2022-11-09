import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDatasetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;
}
