import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetTypeEnum } from "./datasettypeenum";
import { DomainEnum } from "./domainenum";
import { EncryptionConfig } from "./encryptionconfig";
import { Schema } from "./schema";
export declare class DescribeDatasetResponse extends SpeakeasyBase {
    creationTime?: Date;
    dataFrequency?: string;
    datasetArn?: string;
    datasetName?: string;
    datasetType?: DatasetTypeEnum;
    domain?: DomainEnum;
    encryptionConfig?: EncryptionConfig;
    lastModificationTime?: Date;
    schema?: Schema;
    status?: string;
}
