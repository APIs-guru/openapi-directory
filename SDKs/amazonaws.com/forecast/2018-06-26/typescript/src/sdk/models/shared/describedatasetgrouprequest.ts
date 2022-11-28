import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDatasetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn: string;
}
