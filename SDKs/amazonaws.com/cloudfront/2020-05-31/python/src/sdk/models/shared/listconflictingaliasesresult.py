from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListConflictingAliasesResult:
    conflicting_aliases_list: Optional[ConflictingAliasesList] = field(default=None)
    
