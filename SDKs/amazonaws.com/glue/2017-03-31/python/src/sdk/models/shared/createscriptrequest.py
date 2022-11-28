from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateScriptRequest:
    dag_edges: Optional[List[CodeGenEdge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DagEdges') }})
    dag_nodes: Optional[List[CodeGenNode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DagNodes') }})
    language: Optional[LanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Language') }})
    
