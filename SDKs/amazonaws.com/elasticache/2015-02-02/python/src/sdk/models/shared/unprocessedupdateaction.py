from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class UnprocessedUpdateAction:
    r"""UnprocessedUpdateAction
    Update action that has failed to be processed for the corresponding apply/stop request
    """
    
    cache_cluster_id: Optional[str] = field(default=None)
    error_message: Optional[str] = field(default=None)
    error_type: Optional[str] = field(default=None)
    replication_group_id: Optional[str] = field(default=None)
    service_update_name: Optional[str] = field(default=None)
    
