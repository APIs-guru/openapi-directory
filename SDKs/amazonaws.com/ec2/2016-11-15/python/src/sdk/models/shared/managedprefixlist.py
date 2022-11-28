from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ManagedPrefixList:
    r"""ManagedPrefixList
    Describes a managed prefix list.
    """
    
    address_family: Optional[str] = field(default=None)
    max_entries: Optional[int] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    prefix_list_arn: Optional[str] = field(default=None)
    prefix_list_id: Optional[str] = field(default=None)
    prefix_list_name: Optional[str] = field(default=None)
    state: Optional[PrefixListStateEnum] = field(default=None)
    state_message: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    version: Optional[int] = field(default=None)
    
