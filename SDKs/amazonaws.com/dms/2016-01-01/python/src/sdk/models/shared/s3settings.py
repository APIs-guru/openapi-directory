from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cannedaclforobjectsvalue_enum
from . import compressiontypevalue_enum
from . import dataformatvalue_enum
from . import datepartitiondelimitervalue_enum
from . import datepartitionsequencevalue_enum
from . import encodingtypevalue_enum
from . import encryptionmodevalue_enum
from . import parquetversionvalue_enum


@dataclass_json
@dataclass
class S3Settings:
    add_column_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddColumnName' }})
    bucket_folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketFolder' }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketName' }})
    canned_acl_for_objects: Optional[cannedaclforobjectsvalue_enum.CannedACLForObjectsValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CannedAclForObjects' }})
    cdc_inserts_and_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcInsertsAndUpdates' }})
    cdc_inserts_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcInsertsOnly' }})
    cdc_max_batch_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcMaxBatchInterval' }})
    cdc_min_file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcMinFileSize' }})
    cdc_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcPath' }})
    compression_type: Optional[compressiontypevalue_enum.CompressionTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompressionType' }})
    csv_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CsvDelimiter' }})
    csv_no_sup_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CsvNoSupValue' }})
    csv_null_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CsvNullValue' }})
    csv_row_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CsvRowDelimiter' }})
    data_format: Optional[dataformatvalue_enum.DataFormatValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFormat' }})
    data_page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataPageSize' }})
    date_partition_delimiter: Optional[datepartitiondelimitervalue_enum.DatePartitionDelimiterValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatePartitionDelimiter' }})
    date_partition_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatePartitionEnabled' }})
    date_partition_sequence: Optional[datepartitionsequencevalue_enum.DatePartitionSequenceValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatePartitionSequence' }})
    dict_page_size_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DictPageSizeLimit' }})
    enable_statistics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableStatistics' }})
    encoding_type: Optional[encodingtypevalue_enum.EncodingTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncodingType' }})
    encryption_mode: Optional[encryptionmodevalue_enum.EncryptionModeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionMode' }})
    external_table_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalTableDefinition' }})
    ignore_header_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IgnoreHeaderRows' }})
    include_op_for_full_load: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeOpForFullLoad' }})
    max_file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxFileSize' }})
    parquet_timestamp_in_millisecond: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParquetTimestampInMillisecond' }})
    parquet_version: Optional[parquetversionvalue_enum.ParquetVersionValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParquetVersion' }})
    preserve_transactions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreserveTransactions' }})
    rfc4180: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rfc4180' }})
    row_group_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RowGroupLength' }})
    server_side_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideEncryptionKmsKeyId' }})
    service_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccessRoleArn' }})
    timestamp_column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimestampColumnName' }})
    use_csv_no_sup_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseCsvNoSupValue' }})
    
