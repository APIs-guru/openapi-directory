import { SpeakeasyBase } from "../../../internal/utils";
import { CannedAclForObjectsValueEnum } from "./cannedaclforobjectsvalueenum";
import { CompressionTypeValueEnum } from "./compressiontypevalueenum";
import { DataFormatValueEnum } from "./dataformatvalueenum";
import { DatePartitionDelimiterValueEnum } from "./datepartitiondelimitervalueenum";
import { DatePartitionSequenceValueEnum } from "./datepartitionsequencevalueenum";
import { EncodingTypeValueEnum } from "./encodingtypevalueenum";
import { EncryptionModeValueEnum } from "./encryptionmodevalueenum";
import { ParquetVersionValueEnum } from "./parquetversionvalueenum";
/**
 * Settings for exporting data to Amazon S3.
**/
export declare class S3Settings extends SpeakeasyBase {
    addColumnName?: boolean;
    bucketFolder?: string;
    bucketName?: string;
    cannedAclForObjects?: CannedAclForObjectsValueEnum;
    cdcInsertsAndUpdates?: boolean;
    cdcInsertsOnly?: boolean;
    cdcMaxBatchInterval?: number;
    cdcMinFileSize?: number;
    cdcPath?: string;
    compressionType?: CompressionTypeValueEnum;
    csvDelimiter?: string;
    csvNoSupValue?: string;
    csvNullValue?: string;
    csvRowDelimiter?: string;
    dataFormat?: DataFormatValueEnum;
    dataPageSize?: number;
    datePartitionDelimiter?: DatePartitionDelimiterValueEnum;
    datePartitionEnabled?: boolean;
    datePartitionSequence?: DatePartitionSequenceValueEnum;
    dictPageSizeLimit?: number;
    enableStatistics?: boolean;
    encodingType?: EncodingTypeValueEnum;
    encryptionMode?: EncryptionModeValueEnum;
    externalTableDefinition?: string;
    ignoreHeaderRows?: number;
    includeOpForFullLoad?: boolean;
    maxFileSize?: number;
    parquetTimestampInMillisecond?: boolean;
    parquetVersion?: ParquetVersionValueEnum;
    preserveTransactions?: boolean;
    rfc4180?: boolean;
    rowGroupLength?: number;
    serverSideEncryptionKmsKeyId?: string;
    serviceAccessRoleArn?: string;
    timestampColumnName?: string;
    useCsvNoSupValue?: boolean;
}
