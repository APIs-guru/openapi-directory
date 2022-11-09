import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDatasetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn: string;
}
