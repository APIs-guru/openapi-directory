import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetTypeEnum } from "./datasettypeenum";
import { DomainEnum } from "./domainenum";
import { EncryptionConfig } from "./encryptionconfig";
import { Schema } from "./schema";
import { Tag } from "./tag";


export class CreateDatasetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataFrequency" })
  dataFrequency?: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName: string;

  @Metadata({ data: "json, name=DatasetType" })
  datasetType: DatasetTypeEnum;

  @Metadata({ data: "json, name=Domain" })
  domain: DomainEnum;

  @Metadata({ data: "json, name=EncryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=Schema" })
  schema: Schema;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
