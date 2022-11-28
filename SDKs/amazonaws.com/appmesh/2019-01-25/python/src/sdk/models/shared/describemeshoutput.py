from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeMeshOutput:
    r"""DescribeMeshOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    mesh: MeshData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mesh') }})
    
