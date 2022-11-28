from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Registry:
    r"""Registry
    The details of a public registry.
    """
    
    aliases: List[RegistryAlias] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    registry_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryArn') }})
    registry_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    registry_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryUri') }})
    verified: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
