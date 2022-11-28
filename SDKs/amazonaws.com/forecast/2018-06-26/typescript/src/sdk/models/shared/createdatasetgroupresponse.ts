import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDatasetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;
}
