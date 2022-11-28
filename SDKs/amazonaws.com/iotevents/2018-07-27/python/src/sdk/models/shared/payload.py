from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Payload:
    r"""Payload
    <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p>
    """
    
    content_expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentExpression') }})
    type: PayloadTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
