from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import controlmappingsource
from . import controltype_enum


@dataclass_json
@dataclass
class Control:
    action_plan_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionPlanInstructions' }})
    action_plan_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionPlanTitle' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    control_mapping_sources: Optional[List[controlmappingsource.ControlMappingSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlMappingSources' }})
    control_sources: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlSources' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedBy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    testing_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testingInformation' }})
    type: Optional[controltype_enum.ControlTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
