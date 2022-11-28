from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BlueprintDetails:
    r"""BlueprintDetails
    The details of a blueprint.
    """
    
    blueprint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlueprintName') }})
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunId') }})
    
