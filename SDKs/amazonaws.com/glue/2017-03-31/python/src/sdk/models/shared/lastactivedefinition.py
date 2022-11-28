from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LastActiveDefinition:
    r"""LastActiveDefinition
    When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.
    """
    
    blueprint_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlueprintLocation') }})
    blueprint_service_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlueprintServiceLocation') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parameter_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterSpec') }})
    
