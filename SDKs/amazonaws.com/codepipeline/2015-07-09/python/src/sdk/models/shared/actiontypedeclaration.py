from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionTypeDeclaration:
    r"""ActionTypeDeclaration
    The parameters for the action type definition that are provided when the action type is created or updated.
    """
    
    executor: ActionTypeExecutor = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executor') }})
    id: ActionTypeIdentifier = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    input_artifact_details: ActionTypeArtifactDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifactDetails') }})
    output_artifact_details: ActionTypeArtifactDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifactDetails') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    permissions: Optional[ActionTypePermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    urls: Optional[ActionTypeUrls] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    
