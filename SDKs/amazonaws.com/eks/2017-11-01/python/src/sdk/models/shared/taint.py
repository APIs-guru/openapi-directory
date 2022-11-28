from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Taint:
    r"""Taint
    A property that allows a node to repel a set of pods.
    """
    
    effect: Optional[TaintEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
