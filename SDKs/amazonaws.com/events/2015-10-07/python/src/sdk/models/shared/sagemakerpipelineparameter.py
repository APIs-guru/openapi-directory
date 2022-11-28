from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SageMakerPipelineParameter:
    r"""SageMakerPipelineParameter
    Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
