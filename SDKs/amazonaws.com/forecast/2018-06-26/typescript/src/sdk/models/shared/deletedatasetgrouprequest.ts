import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDatasetGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn: string;
}
