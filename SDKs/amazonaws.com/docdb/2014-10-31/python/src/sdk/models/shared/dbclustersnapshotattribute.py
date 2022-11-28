from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DbClusterSnapshotAttribute:
    r"""DbClusterSnapshotAttribute
    <p>Contains the name and values of a manual cluster snapshot attribute.</p> <p>Manual cluster snapshot attributes are used to authorize other accounts to restore a manual cluster snapshot.</p>
    """
    
    attribute_name: Optional[str] = field(default=None)
    attribute_values: Optional[List[str]] = field(default=None)
    
