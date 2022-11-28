from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Statement:
    r"""Statement
    <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p>
    """
    
    end_position: Optional[Position] = field(default=None)
    source_policy_id: Optional[str] = field(default=None)
    source_policy_type: Optional[PolicySourceTypeEnum] = field(default=None)
    start_position: Optional[Position] = field(default=None)
    
