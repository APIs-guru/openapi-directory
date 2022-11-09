import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDatasetGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn: string;
}
