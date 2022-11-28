from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComponentCandidate:
    r"""ComponentCandidate
    Contains information about a component that is a candidate to deploy to a Greengrass core device.
    """
    
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    version_requirements: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionRequirements') }})
    
