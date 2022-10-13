from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import syntaxtoken


@dataclass_json
@dataclass
class DetectSyntaxResponse:
    syntax_tokens: Optional[List[syntaxtoken.SyntaxToken]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyntaxTokens' }})
    
