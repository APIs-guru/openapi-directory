import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetTypeEnum } from "./datasettypeenum";
import { DomainEnum } from "./domainenum";
import { EncryptionConfig } from "./encryptionconfig";
import { Schema } from "./schema";
import { Tag } from "./tag";



export class CreateDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataFrequency" })
  dataFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetType" })
  datasetType: DatasetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain: DomainEnum;

  @SpeakeasyMetadata({ data: "json, name=EncryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=Schema" })
  schema: Schema;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
