from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class DateOptions:
    r"""DateOptions
    Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.
    """
    
    default_value: Optional[str] = field(default=None)
    facet_enabled: Optional[bool] = field(default=None)
    return_enabled: Optional[bool] = field(default=None)
    search_enabled: Optional[bool] = field(default=None)
    sort_enabled: Optional[bool] = field(default=None)
    source_field: Optional[str] = field(default=None)
    
