import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDatasetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetArns" })
  datasetArns: string[];

  @SpeakeasyMetadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn: string;
}
