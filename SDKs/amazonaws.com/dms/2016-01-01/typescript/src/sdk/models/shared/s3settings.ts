import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CannedAclForObjectsValueEnum } from "./cannedaclforobjectsvalueenum";
import { CompressionTypeValueEnum } from "./compressiontypevalueenum";
import { DataFormatValueEnum } from "./dataformatvalueenum";
import { DatePartitionDelimiterValueEnum } from "./datepartitiondelimitervalueenum";
import { DatePartitionSequenceValueEnum } from "./datepartitionsequencevalueenum";
import { EncodingTypeValueEnum } from "./encodingtypevalueenum";
import { EncryptionModeValueEnum } from "./encryptionmodevalueenum";
import { ParquetVersionValueEnum } from "./parquetversionvalueenum";


// S3Settings
/** 
 * Settings for exporting data to Amazon S3. 
**/
export class S3Settings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddColumnName" })
  addColumnName?: boolean;

  @Metadata({ data: "json, name=BucketFolder" })
  bucketFolder?: string;

  @Metadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=CannedAclForObjects" })
  cannedAclForObjects?: CannedAclForObjectsValueEnum;

  @Metadata({ data: "json, name=CdcInsertsAndUpdates" })
  cdcInsertsAndUpdates?: boolean;

  @Metadata({ data: "json, name=CdcInsertsOnly" })
  cdcInsertsOnly?: boolean;

  @Metadata({ data: "json, name=CdcMaxBatchInterval" })
  cdcMaxBatchInterval?: number;

  @Metadata({ data: "json, name=CdcMinFileSize" })
  cdcMinFileSize?: number;

  @Metadata({ data: "json, name=CdcPath" })
  cdcPath?: string;

  @Metadata({ data: "json, name=CompressionType" })
  compressionType?: CompressionTypeValueEnum;

  @Metadata({ data: "json, name=CsvDelimiter" })
  csvDelimiter?: string;

  @Metadata({ data: "json, name=CsvNoSupValue" })
  csvNoSupValue?: string;

  @Metadata({ data: "json, name=CsvNullValue" })
  csvNullValue?: string;

  @Metadata({ data: "json, name=CsvRowDelimiter" })
  csvRowDelimiter?: string;

  @Metadata({ data: "json, name=DataFormat" })
  dataFormat?: DataFormatValueEnum;

  @Metadata({ data: "json, name=DataPageSize" })
  dataPageSize?: number;

  @Metadata({ data: "json, name=DatePartitionDelimiter" })
  datePartitionDelimiter?: DatePartitionDelimiterValueEnum;

  @Metadata({ data: "json, name=DatePartitionEnabled" })
  datePartitionEnabled?: boolean;

  @Metadata({ data: "json, name=DatePartitionSequence" })
  datePartitionSequence?: DatePartitionSequenceValueEnum;

  @Metadata({ data: "json, name=DictPageSizeLimit" })
  dictPageSizeLimit?: number;

  @Metadata({ data: "json, name=EnableStatistics" })
  enableStatistics?: boolean;

  @Metadata({ data: "json, name=EncodingType" })
  encodingType?: EncodingTypeValueEnum;

  @Metadata({ data: "json, name=EncryptionMode" })
  encryptionMode?: EncryptionModeValueEnum;

  @Metadata({ data: "json, name=ExternalTableDefinition" })
  externalTableDefinition?: string;

  @Metadata({ data: "json, name=IgnoreHeaderRows" })
  ignoreHeaderRows?: number;

  @Metadata({ data: "json, name=IncludeOpForFullLoad" })
  includeOpForFullLoad?: boolean;

  @Metadata({ data: "json, name=MaxFileSize" })
  maxFileSize?: number;

  @Metadata({ data: "json, name=ParquetTimestampInMillisecond" })
  parquetTimestampInMillisecond?: boolean;

  @Metadata({ data: "json, name=ParquetVersion" })
  parquetVersion?: ParquetVersionValueEnum;

  @Metadata({ data: "json, name=PreserveTransactions" })
  preserveTransactions?: boolean;

  @Metadata({ data: "json, name=Rfc4180" })
  rfc4180?: boolean;

  @Metadata({ data: "json, name=RowGroupLength" })
  rowGroupLength?: number;

  @Metadata({ data: "json, name=ServerSideEncryptionKmsKeyId" })
  serverSideEncryptionKmsKeyId?: string;

  @Metadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;

  @Metadata({ data: "json, name=TimestampColumnName" })
  timestampColumnName?: string;

  @Metadata({ data: "json, name=UseCsvNoSupValue" })
  useCsvNoSupValue?: boolean;
}
