import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDatasetGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetArns" })
  datasetArns: string[];

  @Metadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn: string;
}
