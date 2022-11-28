from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SolutionStackDescription:
    r"""SolutionStackDescription
    Describes the solution stack.
    """
    
    permitted_file_types: Optional[List[str]] = field(default=None)
    solution_stack_name: Optional[str] = field(default=None)
    
