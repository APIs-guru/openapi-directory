from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteAppResult:
    r"""DeleteAppResult
     The result structure for the delete app request. 
    """
    
    app: App = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    
