import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainEnum } from "./domainenum";


export class DescribeDatasetGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatasetArns" })
  datasetArns?: string[];

  @Metadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;

  @Metadata({ data: "json, name=DatasetGroupName" })
  datasetGroupName?: string;

  @Metadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
