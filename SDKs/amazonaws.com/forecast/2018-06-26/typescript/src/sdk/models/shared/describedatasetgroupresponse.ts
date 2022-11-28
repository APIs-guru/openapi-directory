import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";



export class DescribeDatasetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatasetArns" })
  datasetArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetGroupName" })
  datasetGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
