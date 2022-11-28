from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Position:
    r"""Position
    <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p>
    """
    
    column: Optional[int] = field(default=None)
    line: Optional[int] = field(default=None)
    
