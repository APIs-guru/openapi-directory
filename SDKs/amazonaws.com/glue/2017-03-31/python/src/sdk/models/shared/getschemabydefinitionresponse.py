from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSchemaByDefinitionResponse:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime') }})
    data_format: Optional[DataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaArn') }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionId') }})
    status: Optional[SchemaVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
