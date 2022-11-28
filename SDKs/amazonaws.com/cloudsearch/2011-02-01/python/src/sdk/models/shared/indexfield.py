from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class IndexField:
    r"""IndexField
    Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>.
    """
    
    index_field_name: str = field()
    index_field_type: IndexFieldTypeEnum = field()
    literal_options: Optional[LiteralOptions] = field(default=None)
    source_attributes: Optional[List[SourceAttribute]] = field(default=None)
    text_options: Optional[TextOptions] = field(default=None)
    u_int_options: Optional[UIntOptions] = field(default=None)
    
