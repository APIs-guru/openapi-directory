import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AddColumnName" })
  addColumnName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BucketFolder" })
  bucketFolder?: string;

  @SpeakeasyMetadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=CannedAclForObjects" })
  cannedAclForObjects?: CannedAclForObjectsValueEnum;

  @SpeakeasyMetadata({ data: "json, name=CdcInsertsAndUpdates" })
  cdcInsertsAndUpdates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CdcInsertsOnly" })
  cdcInsertsOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CdcMaxBatchInterval" })
  cdcMaxBatchInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=CdcMinFileSize" })
  cdcMinFileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=CdcPath" })
  cdcPath?: string;

  @SpeakeasyMetadata({ data: "json, name=CompressionType" })
  compressionType?: CompressionTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=CsvDelimiter" })
  csvDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=CsvNoSupValue" })
  csvNoSupValue?: string;

  @SpeakeasyMetadata({ data: "json, name=CsvNullValue" })
  csvNullValue?: string;

  @SpeakeasyMetadata({ data: "json, name=CsvRowDelimiter" })
  csvRowDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=DataFormat" })
  dataFormat?: DataFormatValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DataPageSize" })
  dataPageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=DatePartitionDelimiter" })
  datePartitionDelimiter?: DatePartitionDelimiterValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DatePartitionEnabled" })
  datePartitionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DatePartitionSequence" })
  datePartitionSequence?: DatePartitionSequenceValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DictPageSizeLimit" })
  dictPageSizeLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=EnableStatistics" })
  enableStatistics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EncodingType" })
  encodingType?: EncodingTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=EncryptionMode" })
  encryptionMode?: EncryptionModeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=ExternalTableDefinition" })
  externalTableDefinition?: string;

  @SpeakeasyMetadata({ data: "json, name=IgnoreHeaderRows" })
  ignoreHeaderRows?: number;

  @SpeakeasyMetadata({ data: "json, name=IncludeOpForFullLoad" })
  includeOpForFullLoad?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxFileSize" })
  maxFileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=ParquetTimestampInMillisecond" })
  parquetTimestampInMillisecond?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ParquetVersion" })
  parquetVersion?: ParquetVersionValueEnum;

  @SpeakeasyMetadata({ data: "json, name=PreserveTransactions" })
  preserveTransactions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Rfc4180" })
  rfc4180?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RowGroupLength" })
  rowGroupLength?: number;

  @SpeakeasyMetadata({ data: "json, name=ServerSideEncryptionKmsKeyId" })
  serverSideEncryptionKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TimestampColumnName" })
  timestampColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=UseCsvNoSupValue" })
  useCsvNoSupValue?: boolean;
}
