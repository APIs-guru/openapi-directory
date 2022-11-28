import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDatasetImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetImportJobArn" })
  datasetImportJobArn: string;
}
