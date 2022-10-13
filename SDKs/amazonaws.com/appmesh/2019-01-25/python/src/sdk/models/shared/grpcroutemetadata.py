from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import grpcroutemetadatamatchmethod


@dataclass_json
@dataclass
class GrpcRouteMetadata:
    invert: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invert' }})
    match: Optional[grpcroutemetadatamatchmethod.GrpcRouteMetadataMatchMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
