from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errordetails


@dataclass_json
@dataclass
class SchemaVersionErrorItem:
    error_details: Optional[errordetails.ErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDetails' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionNumber' }})
    
