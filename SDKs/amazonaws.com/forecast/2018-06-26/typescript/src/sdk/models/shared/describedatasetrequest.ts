import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn: string;
}
