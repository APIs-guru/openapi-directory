from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class InstanceTagNotificationAttribute:
    r"""InstanceTagNotificationAttribute
    Describes the registered tag keys for the current Region.
    """
    
    include_all_tags_of_instance: Optional[bool] = field(default=None)
    instance_tag_keys: Optional[List[str]] = field(default=None)
    
