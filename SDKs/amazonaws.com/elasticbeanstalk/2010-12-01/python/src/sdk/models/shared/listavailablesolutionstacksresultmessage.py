from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListAvailableSolutionStacksResultMessage:
    r"""ListAvailableSolutionStacksResultMessage
    A list of available AWS Elastic Beanstalk solution stacks.
    """
    
    solution_stack_details: Optional[List[SolutionStackDescription]] = field(default=None)
    solution_stacks: Optional[List[str]] = field(default=None)
    
