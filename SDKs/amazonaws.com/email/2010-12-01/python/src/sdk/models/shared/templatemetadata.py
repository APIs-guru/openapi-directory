from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class TemplateMetadata:
    r"""TemplateMetadata
    Contains information about an email template.
    """
    
    created_timestamp: Optional[datetime] = field(default=None)
    name: Optional[str] = field(default=None)
    
