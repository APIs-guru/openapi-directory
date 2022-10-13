from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import codegenedge
from . import codegennode
from . import language_enum


@dataclass_json
@dataclass
class CreateScriptRequest:
    dag_edges: Optional[List[codegenedge.CodeGenEdge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DagEdges' }})
    dag_nodes: Optional[List[codegennode.CodeGenNode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DagNodes' }})
    language: Optional[language_enum.LanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Language' }})
    
