import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetTypeEnum } from "./datasettypeenum";
import { DomainEnum } from "./domainenum";
import { EncryptionConfig } from "./encryptionconfig";
import { Schema } from "./schema";
import { Tag } from "./tag";
export declare class CreateDatasetRequest extends SpeakeasyBase {
    dataFrequency?: string;
    datasetName: string;
    datasetType: DatasetTypeEnum;
    domain: DomainEnum;
    encryptionConfig?: EncryptionConfig;
    schema: Schema;
    tags?: Tag[];
}
