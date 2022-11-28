from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class IndexField:
    r"""IndexField
    Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.
    """
    
    index_field_name: str = field()
    index_field_type: IndexFieldTypeEnum = field()
    date_array_options: Optional[DateArrayOptions] = field(default=None)
    date_options: Optional[DateOptions] = field(default=None)
    double_array_options: Optional[DoubleArrayOptions] = field(default=None)
    double_options: Optional[DoubleOptions] = field(default=None)
    int_array_options: Optional[IntArrayOptions] = field(default=None)
    int_options: Optional[IntOptions] = field(default=None)
    lat_lon_options: Optional[LatLonOptions] = field(default=None)
    literal_array_options: Optional[LiteralArrayOptions] = field(default=None)
    literal_options: Optional[LiteralOptions] = field(default=None)
    text_array_options: Optional[TextArrayOptions] = field(default=None)
    text_options: Optional[TextOptions] = field(default=None)
    
