from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PipelineConfig:
    r"""PipelineConfig
    The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
    """
    
    functions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functions') }})
    
