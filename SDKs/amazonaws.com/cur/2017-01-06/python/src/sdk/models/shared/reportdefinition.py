from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportDefinition:
    r"""ReportDefinition
    The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. 
    """
    
    additional_schema_elements: List[SchemaElementEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalSchemaElements') }})
    compression: CompressionFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compression') }})
    format: ReportFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    report_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportName') }})
    s3_bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    s3_prefix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Prefix') }})
    s3_region: AwsRegionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Region') }})
    time_unit: TimeUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeUnit') }})
    additional_artifacts: Optional[List[AdditionalArtifactEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalArtifacts') }})
    billing_view_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingViewArn') }})
    refresh_closed_reports: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshClosedReports') }})
    report_versioning: Optional[ReportVersioningEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportVersioning') }})
    
