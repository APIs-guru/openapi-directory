from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComponentDeploymentSpecification:
    r"""ComponentDeploymentSpecification
    Contains information about a component to deploy.
    """
    
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    configuration_update: Optional[ComponentConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationUpdate') }})
    run_with: Optional[ComponentRunWith] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runWith') }})
    
