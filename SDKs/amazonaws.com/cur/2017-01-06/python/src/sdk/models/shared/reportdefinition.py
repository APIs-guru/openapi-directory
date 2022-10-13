from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import additionalartifact_enum
from . import schemaelement_enum
from . import compressionformat_enum
from . import reportformat_enum
from . import reportversioning_enum
from . import awsregion_enum
from . import timeunit_enum


@dataclass_json
@dataclass
class ReportDefinition:
    additional_artifacts: Optional[List[additionalartifact_enum.AdditionalArtifactEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalArtifacts' }})
    additional_schema_elements: List[schemaelement_enum.SchemaElementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalSchemaElements' }})
    billing_view_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingViewArn' }})
    compression: compressionformat_enum.CompressionFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compression' }})
    format: reportformat_enum.ReportFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    refresh_closed_reports: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshClosedReports' }})
    report_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportName' }})
    report_versioning: Optional[reportversioning_enum.ReportVersioningEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportVersioning' }})
    s3_bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Bucket' }})
    s3_prefix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Prefix' }})
    s3_region: awsregion_enum.AwsRegionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Region' }})
    time_unit: timeunit_enum.TimeUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeUnit' }})
    
