import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetTypeEnum } from "./datasettypeenum";
import { DomainEnum } from "./domainenum";
import { EncryptionConfig } from "./encryptionconfig";
import { Schema } from "./schema";


export class DescribeDatasetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DataFrequency" })
  dataFrequency?: string;

  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=DatasetType" })
  datasetType?: DatasetTypeEnum;

  @Metadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @Metadata({ data: "json, name=EncryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Schema" })
  schema?: Schema;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
