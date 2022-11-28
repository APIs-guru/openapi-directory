from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class SendBulkTemplatedEmailResponse:
    status: List[BulkEmailDestinationStatus] = field()
    
