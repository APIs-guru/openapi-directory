from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Blueprint:
    r"""Blueprint
    The details of a blueprint.
    """
    
    blueprint_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlueprintLocation') }})
    blueprint_service_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlueprintServiceLocation') }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    last_active_definition: Optional[LastActiveDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastActiveDefinition') }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parameter_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterSpec') }})
    status: Optional[BlueprintStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
